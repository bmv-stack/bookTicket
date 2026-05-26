import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import SlotCard from './SlotCard';
import { Colors } from '../theme/Color';

const BookingCard = ({
  slots,
  movie,
  theatreBrand,
  theatreName,
  selectedDate,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.theatreInfo}>
          <Text style={styles.theatreLabel}>{theatreBrand}</Text>
          <Text style={styles.theatreName}>{theatreName}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.slotsContainer}>
        {slots.length > 0 ? (
          <FlatList
            scrollEnabled={false}
            numColumns={3}
            columnWrapperStyle={styles.row}
            data={slots}
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
                date={selectedDate}
              />
            )}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🎬</Text>
            <Text style={styles.noShowsText}>No shows available</Text>
            <Text style={styles.noShowsSubText}>
              Try selecting a different date
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginHorizontal: 12,
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    elevation: 2,
    shadowColor: Colors.shadowColor,
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
    color: Colors.label,
    marginBottom: 4,
  },
  theatreName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.theatreText,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: 10,
  },
  slotsContainer: {
    marginTop: 8,
  },
  row: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
  noShowsText: {
    textAlign: 'center',
    color: Colors.noShowText,
    fontSize: 12,
    paddingVertical: 16,
  },
  noShowsSubText: {
    fontSize: 12,
    color: Colors.subtitle,
  },
  emptyIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    gap: 4,
  },
});
