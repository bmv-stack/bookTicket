import { FlatList, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { dateListGenerator } from '../../utils/dateListGeneration';
import DateList from '../../components/DateList';
import { DUMMY_THEATRE_DATA } from '../../data/DUMMY_THEATRE_DATA';
import BookingCard from '../../components/BookingCard';
import { styles } from './BookinScreen.styles';

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
