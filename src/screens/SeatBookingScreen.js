import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { seatGenerator } from '../utils/seatGenerator';
import { DUMMY_SLOT_DATA } from '../data/DUMMY_SLOT_DATA';

const SeatBookingScreen = ({ navigation, route }) => {
  const { movie, theatre, slot } = route.params;
  const [seats, setSeats] = useState(seatGenerator());
  const [selectedSeats, setSelectedSeats] = useState([]);
  const pricePerSeat = DUMMY_SLOT_DATA.find(slot => slot.price);
  const totalPrice = pricePerSeat.price * selectedSeats.length;
  console.log('Total Price: ', totalPrice);

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
    navigation.navigate('Payment', { totalPrice: totalPrice });
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginTop: 5,
    flexDirection: 'row',
    height: 'auto',
    width: '100%',
    backgroundColor: '#2c2c2c',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  headerContent: {
    flex: 1,
  },
  movieText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  movieDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  movieDetail: {
    fontSize: 12,
    color: '#b3b3b3',
    marginHorizontal: 4,
  },
  seatBase: {
    width: 40,
    height: 40,
    margin: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aisleSeat: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  seatReserved: {
    backgroundColor: '#e0e0e0',
    borderColor: '#bdbdbd',
  },
  seatSelected: {
    backgroundColor: '#4CD964',
    borderColor: '#4CD964',
  },
  seatContainer: {
    marginTop: '10%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  screenContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  screen: {
    width: '70%',
    height: 6,
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
  },
  screenText: {
    fontSize: 10,
    color: '#888',
    marginTop: 6,
    letterSpacing: 2,
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fafafa',
  },
  footerText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 12,
  },
  bold: {
    fontWeight: 'bold',
    color: '#222',
  },
  bookButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bookButtonDisbaled: {
    backgroundColor: '#8f8a8a',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
});
