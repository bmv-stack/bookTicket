import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { seatGenerator } from '../../utils/seatGenerator';
import { DUMMY_SLOT_DATA } from '../../data/DUMMY_SLOT_DATA';
import { styles } from './SeatBookingScreen.styles';

const SeatBookingScreen = ({ navigation, route }) => {
  const { movie, theatre, slot } = route.params;
  const date = route.params?.date;
  console.log('Date on Payment Screen: ', date);
  const [seats, setSeats] = useState(seatGenerator());
  const [selectedSeats, setSelectedSeats] = useState([]);
  const pricePerSeat = DUMMY_SLOT_DATA.find(slot => slot.price);
  const totalPrice = slot.price * selectedSeats.length;

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
  const handleBooking = () => {
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
            <Text style={styles.movieDetail}>🕐 {slot.slotTime}</Text>
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
