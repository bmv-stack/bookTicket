import { FlatList, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { dateListGenerator } from '../../utils/dateListGeneration';
import DateList from '../../components/DateList';
import { movieService } from '../../database/movieService';
import BookingCard from '../../components/BookingCard';
import { styles } from './BookinScreen.styles';

const BookingScreen = ({ route, navigation }) => {
  const dateList = useMemo(() => dateListGenerator(), []);
  const todayDate = useMemo(() => new Date().toISOString().split('T')[0], []);
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [slotTheatres, setSlotTheatres] = useState([]);
  const movie = route.params?.movie;

  const groupSlotsByTheatre = slots => {
    const map = {};

    slots.forEach(slot => {
      if (!map[slot.theatreId]) {
        map[slot.theatreId] = {
          id: slot.theatreId,
          name: slot.theatreName,
          brand: slot.theatreBrand,
          city: slot.theatreCity,
          slots: [],
        };
      }

      map[slot.theatreId].slots.push({
        id: slot.slotId,
        time: slot.slotTime,
        price: slot.ticketPrice,
        status: slot.slotStatus,
        soundSystem: slot.SoundSystem,
      });
    });

    return Object.values(map);
  };

  useEffect(() => {
    const fetchMovieTime = async () => {
      if (!movie?.id) return;

      const flatSlots = await movieService.getSlotsForMovieAndDate(
        movie.id,
        selectedDate,
      );
      const groupedData = groupSlotsByTheatre(flatSlots);
      setSlotTheatres(groupedData);
    };
    fetchMovieTime();
  }, [movie?.id, selectedDate]);

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
        data={slotTheatres}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <BookingCard
            movie={movie}
            slots={item.slots}
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
