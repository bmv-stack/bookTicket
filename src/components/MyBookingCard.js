import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { formatDate } from '../utils/formatDate';
//import { useDispatch } from 'react-redux';
import { cancelBooking } from '../redux/slices/bookingSlice';
import { movieService } from '../database/movieService';
import { Colors } from '../theme/Color';

const MyBookingCard = ({ item, onCancelled }) => {
  const handleCancel = (id, movieName) => {
    Alert.alert(
      `Cancel booking for ${movieName}?`,
      'This action cannot be reverted',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: async () => {
            const result = await movieService.cancelBooking(id);
            if (result) {
              onCancelled();
            } else {
              Alert.alert('Unable to cancel the booking');
            }
          },
        },
      ],
    );
  };
  return (
    <View style={styles.ticketCard}>
      <Text style={styles.movieTitle}>{item.movie_name}</Text>
      <Text style={styles.detailsText}>Location: {item.theatre_name}</Text>
      <Text style={styles.detailsText}>
        Booked Seats: {item.selected_seats}
      </Text>
      <Text style={styles.detailsText}>
        Date: {formatDate(item.booking_date)}
      </Text>
      <Text style={styles.detailsText}>Slot: {item.slot_time}</Text>
      <Text style={styles.priceText}>Paid: ₹{item.payable_amount}</Text>

      <TouchableOpacity
        style={styles.cancelButton}
        activeOpacity={0.5}
        onPress={() => handleCancel(item.id, item.movie_name)}
      >
        <Text style={styles.cancelButtonText}>Cancel Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyBookingCard;

const styles = StyleSheet.create({
  ticketCard: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  detailsText: { fontSize: 14, color: Colors.label, marginBottom: 2 },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.priceText,
    marginTop: 4,
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    width: '40%',
    backgroundColor: Colors.cancelButton,
    borderRadius: 10,
    marginTop: 10,
  },
  cancelButtonText: {
    fontWeight: '500',
    color: Colors.cancelButtonText,
  },
});
