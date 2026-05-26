import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
//import { useSelector } from 'react-redux';
import MyBookingCard from '../../components/MyBookingCard';
import { movieService } from '../../database/movieService';
import { useAuth } from '../../contexts/AuthContext';
import { styles } from './MyBookingScreen.styles';

const MyBookingsScreen = () => {
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
