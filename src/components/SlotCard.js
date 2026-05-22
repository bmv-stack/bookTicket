import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SlotCard = ({
  timing,
  status = 'Available',
  sound,
  movie,
  theatre,
  slot,
  date,
}) => {
  const navigation = useNavigation();

  const handleSlotPress = () => {
    navigation.navigate('SeatBooking', {
      movie,
      theatre,
      slot,
      date,
    });
  };

  const getStatusStyles = () => {
    switch (status) {
      case 'Available':
        return {
          border: '#1db954',
          badge: '#1db954',
          badgeText: '#fff',
          dot: '#1db954',
        };
      case 'Filling Fast':
        return {
          border: '#ff9800',
          badge: '#ff9800',
          badgeText: '#fff',
          dot: '#ff9800',
        };
      case 'Full':
        return {
          border: '#ccc',
          badge: '#eee',
          badgeText: '#999',
          dot: '#ccc',
        };
      default:
        return {
          border: '#1db954',
          badge: '#1db954',
          badgeText: '#fff',
          dot: '#1db954',
        };
    }
  };

  const statusStyles = getStatusStyles();
  const isFull = status === 'Full';

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handleSlotPress}
      disabled={isFull}
    >
      <View
        style={[
          styles.slotContainer,
          { borderColor: statusStyles.border },
          isFull && styles.disabledSlot,
        ]}
      >
        <View
          style={[styles.statusDot, { backgroundColor: statusStyles.dot }]}
        />

        <Text style={[styles.timeText, isFull && styles.mutedText]}>
          {timing}
        </Text>

        {sound && (
          <Text style={[styles.soundText, isFull && styles.mutedText]}>
            {sound}
          </Text>
        )}

        {status !== 'Available' && (
          <View style={[styles.badge, { backgroundColor: statusStyles.badge }]}>
            <Text style={[styles.badgeText, { color: statusStyles.badgeText }]}>
              {status === 'Full' ? 'HOUSEFULL' : 'FAST'}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SlotCard;

const styles = StyleSheet.create({
  slotContainer: {
    height: 80,
    width: 90,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  disabledSlot: {
    backgroundColor: '#f5f5f5',
    opacity: 0.6,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginBottom: 5,
  },
  timeText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
  },
  soundText: {
    fontSize: 9,
    color: '#888',
    marginTop: 3,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  mutedText: {
    color: '#aaa',
  },
  badge: {
    marginTop: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
