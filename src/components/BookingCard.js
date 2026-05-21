import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useMemo } from 'react';
import { DUMMY_SLOT_DATA } from '../data/DUMMY_SLOT_DATA';
import SlotCard from './SlotCard';
import { useNavigation } from '@react-navigation/native';

const BookingCard = ({
  movie,
  theatreId,
  theatreBrand,
  theatreName,
  selectedDate,
  navigation,
}) => {
  const filteredSlots = useMemo(() => {
    return DUMMY_SLOT_DATA.filter(
      slot => slot.theatreId === theatreId && slot.date === selectedDate,
    );
  }, [theatreId, selectedDate]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.theatreInfo}>
          <Text style={styles.theatreLabel}>📍 {theatreBrand}</Text>
          <Text style={styles.theatreName}>{theatreName}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.slotsContainer}>
        {filteredSlots.length > 0 ? (
          <FlatList
            scrollEnabled={false}
            numColumns={3}
            columnWrapperStyle={styles.row}
            data={filteredSlots}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <SlotCard
                timing={item.time}
                sound={item.soundSystem}
                status={item.status}
                movie={movie}
                theatre={{ brand: theatreBrand, name: theatreName }}
                slot={item}
                navigation={navigation}
              />
            )}
          />
        ) : (
          <Text style={styles.noShowsText}>
            No shows available for this date
          </Text>
        )}
      </View>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 12,
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  theatreInfo: {
    flex: 1,
  },
  theatreLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  theatreName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  slotsContainer: {
    marginTop: 8,
  },
  row: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 8,
  },
  noShowsText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    paddingVertical: 16,
  },
});
