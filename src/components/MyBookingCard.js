import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { formatDate } from '../utils/formatDate';
import { useDispatch } from 'react-redux';
import { cancelBooking } from '../redux/slices/bookingSlice';

const MyBookingCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleCancel = (id, movieName) => {
    Alert.alert(
      `Cancel booking for ${movieName}?`,
      'This action cannot be reverted',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => dispatch(cancelBooking(id)),
        },
      ],
    );
  };
  return (
    <View style={styles.ticketCard}>
      <Text style={styles.movieTitle}>{item.movieName.name}</Text>
      <Text style={styles.detailsText}>Location: {item.theatre.name}</Text>
      <Text style={styles.detailsText}>
        Booked Seats: {item.selectedSeats?.join(', ')}
      </Text>
      <Text style={styles.detailsText}>Date: {formatDate(item.date)}</Text>
      <Text style={styles.detailsText}>Slot: {item.slot.time}</Text>
      <Text style={styles.priceText}>Paid: ₹{item.payableAmount}</Text>

      <TouchableOpacity
        style={styles.cancelButton}
        activeOpacity={0.5}
        onPress={() => handleCancel(item.id, item.movieName.name)}
      >
        <Text style={styles.cancelButtonText}>Cancel Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyBookingCard;

const styles = StyleSheet.create({
  ticketCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  detailsText: { fontSize: 14, color: '#666', marginBottom: 2 },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CD964',
    marginTop: 4,
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    width: '40%',
    backgroundColor: '#a8a0a0',
    borderRadius: 10,
    marginTop: 10,
  },
  cancelButtonText: {
    fontWeight: '500',
    color: 'red',
  },
});
