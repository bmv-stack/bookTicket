import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
//import { useSelector } from 'react-redux';
import MyBookingCard from '../../components/MyBookingCard';
import { movieService } from '../../database/movieService';
import { useAuth } from '../../contexts/AuthContext';
import { Colors } from '../../theme/Color';

const MyBookingsScreen = ({ navigation }) => {
  //const myBookings = useSelector(state => state.booking.myBookings);
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    const data = await movieService.getBookings(user?.id);
    if (data) {
      console.log('Booking Submitted');
    }
    setBookings(data);
  };
  useEffect(() => {
    getBookings();
  }, [user?.id]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={bookings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MyBookingCard item={item} onCancelled={getBookings} />
        )}
        contentContainerStyle={bookings.length === 0 && styles.emptyList}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              You haven't booked any tickets yet!
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyBookingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  ticketCard: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.infoText,
    marginBottom: 4,
  },
  detailsText: { fontSize: 14, color: Colors.label, marginBottom: 2 },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.priceText,
    marginTop: 4,
  },
  emptyList: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: Colors.subtitle,
    marginTop: 40,
  },
});
