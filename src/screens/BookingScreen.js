import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dateListGenerator } from '../utils/dateListGeneration';
import DateList from '../components/DateList';
import { DUMMY_THEATRE_DATA } from '../data/DUMMY_THEATRE_DATA';
import BookingCard from '../components/BookingCard';

const BookingScreen = ({ route, navigation }) => {
  const dateList = useMemo(() => dateListGenerator(), []);
  const todayDate = useMemo(() => new Date().toISOString().split('T')[0], []);
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const movie = route.params?.movie;
  return (
    <View style={styles.container}>
      <View style={styles.dateListContainer}>
        <FlatList
          horizontal
          data={dateList}
          keyExtractor={item => item.fullDate}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <DateList
              item={item}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          )}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DUMMY_THEATRE_DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <BookingCard
            movie={movie}
            theatreId={item.id}
            theatreBrand={item.brand}
            theatreName={item.name}
            selectedDate={selectedDate}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  dateListContainer: {
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    marginBottom: 15,
  },
  bookingContainer: {
    flex: 1,
  },
});
