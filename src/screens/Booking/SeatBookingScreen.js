import { Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { seatGenerator } from '../../utils/seatGenerator';
import { movieService } from '../../database/movieService';
import { styles } from './SeatBookingScreen.styles';

const SeatBookingScreen = ({ navigation, route }) => {
  const { movie, theatre, slot } = route.params;
  const date = route.params?.date;
  console.log('Date on Payment Screen: ', date);
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const totalPrice = slot.price * selectedSeats.length;

  useEffect(() => {
    const dbSeats = async () => {
      const takenSeats = (await movieService.getBookedSeats(slot.id)) ?? [];
      const newSeats = seatGenerator(takenSeats);
      console.log('Taken seats from DB:', takenSeats);
      const syncedSeats = newSeats.map(seat => {
        if (takenSeats.includes(seat.id)) {
          return {
            ...seat,
            status: takenSeats.includes(seat.id) ? 'reserved' : seat.status,
          };
        }
        return seat;
      });
      setSeats(syncedSeats);
    };
    dbSeats();
  }, [slot.id]);

  const handleSeatPress = seat => {
    if (seat.status === 'empty' || seat.status === 'reserved') return;

    const updatedSeats = seats.map(s => {
      if (s.id === seat.id) {
        const isSelected = s.status === 'selected';
        return { ...s, status: isSelected ? 'available' : 'selected' };
      }
      return s;
    });
    setSeats(updatedSeats);

    if (seat.status === 'selected') {
      setSelectedSeats(selectedSeats.filter(id => id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  };
  const handleBooking = async () => {
    const availability = await movieService.checkSeats(slot.id, selectedSeats);

    if (!availability.available) {
      Alert.alert(
        'Seats unavailable',
        `Seat ${availability.conflicting.join(
          ',',
        )} are booked. Please select another seats`,
      );
      const takenSeats = await movieService.getBookedSeats(slot.id);
      const newSeats = seatGenerator(takenSeats);
      setSeats(newSeats);
      setSelectedSeats([]);
      return;
    }
    navigation.navigate('Payment', {
      totalPrice: totalPrice,
      theatre: theatre,
      movie: movie,
      selectedSeats: selectedSeats,
      slot: slot,
      date: date,
    });
  };
  const isSeatSelected = selectedSeats.length > 0;

  const renderSeats = ({ item }) => {
    if (item.status === 'empty') {
      return <View style={[styles.seatBase, styles.aisleSeat]} />;
    }
    const seatStyle = [styles.seatBase];
    if (item.status === 'reserved') {
      seatStyle.push(styles.seatReserved);
    }
    if (item.status === 'selected') {
      seatStyle.push(styles.seatSelected);
    }
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={seatStyle}
        onPress={() => handleSeatPress(item)}
      >
        <Text>{item.id}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <Text style={styles.movieText}>{movie.name}</Text>
            <Text style={styles.movieDetail}>•</Text>
            <Text style={styles.movieDetail}>⏱ {movie.duration}</Text>
          </View>
          <View style={styles.movieDetailsRow}>
            <Text style={styles.movieDetail}>🎬 {theatre.brand}</Text>
          </View>
          <View style={styles.movieDetailsRow}>
            <Text style={styles.movieDetail}>📍 {theatre.name}</Text>
            <Text style={styles.movieDetail}>•</Text>
            <Text style={styles.movieDetail}>🕐 {slot.time}</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={seats}
        keyExtractor={item => item.id}
        renderItem={renderSeats}
        numColumns={6}
        contentContainerStyle={styles.seatContainer}
        bounces={false}
      />
      <View style={styles.screenContainer}>
        <View style={styles.screen} />
        <Text style={styles.screenText}>SCREEN THIS WAY</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Selected Seats:{' '}
          <Text style={styles.bold}>{selectedSeats.join(',') || 'None'}</Text>
        </Text>
        <TouchableOpacity
          onPress={handleBooking}
          style={[
            isSeatSelected ? styles.bookButton : styles.bookButtonDisbaled,
          ]}
          disabled={!isSeatSelected}
        >
          <Text style={styles.bookButtonText}>
            Proceed to Payment {''} (₹{totalPrice})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SeatBookingScreen;
