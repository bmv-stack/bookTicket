import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useMemo } from 'react';
import { DUMMY_SLOT_DATA } from '../data/DUMMY_SLOT_DATA';
import SlotCard from './SlotCard';

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
        <View style={styles.brandPill}>
          <Text style={styles.brandText}>{theatreBrand}</Text>
        </View>
        <View style={styles.theatreInfo}>
          <Text style={styles.theatreName}>{theatreName}</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationText}>{theatreBrand}</Text>
          </View>
        </View>
      </View>

      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerLabel}>AVAILABLE SHOWS</Text>
        <View style={styles.dividerLine} />
      </View>

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

      {filteredSlots.length > 0 && (
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#1db954' }]} />
            <Text style={styles.legendText}>Available</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#ff9800' }]} />
            <Text style={styles.legendText}>Filling Fast</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#ccc' }]} />
            <Text style={styles.legendText}>Full</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 12,
    marginVertical: 10,
    paddingVertical: 16,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 10,
  },
  brandPill: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 44,
  },
  brandText: {
    fontSize: 18,
  },
  theatreInfo: {
    flex: 1,
  },
  theatreName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
    marginBottom: 3,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  locationIcon: {
    fontSize: 10,
  },
  locationText: {
    fontSize: 11,
    color: '#888',
    fontWeight: '500',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    gap: 8,
  },
  dividerLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#e5e5e5',
  },
  dividerLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#bbb',
    letterSpacing: 1,
  },
  slotsContainer: {
    marginTop: 4,
  },
  row: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 4,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    gap: 4,
  },
  emptyIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  noShowsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
  },
  noShowsSubText: {
    fontSize: 12,
    color: '#aaa',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#eee',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  legendDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 11,
    color: '#888',
    fontWeight: '500',
  },
});
