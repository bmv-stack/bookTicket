import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/Color';

const SlotCard = ({
  timing,
  status = 'Available',
  sound,
  movie,
  theatre,
  slot,
  navigation: navProp,
  date,
}) => {
  const navigationHook = useNavigation();
  const navigation = navProp || navigationHook;

  const handleSlotPress = () => {
    navigation.navigate('SeatBooking', {
      movie,
      theatre,
      slot,
      date,
    });
  };
  const getStatusColor = () => {
    switch (status) {
      case 'Available':
        return Colors.available;
      case 'Filling Fast':
        return Colors.fillingFast;
      case 'Full':
        return Colors.slotFull;
      default:
        return Colors.available;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handleSlotPress}
      disabled={status === 'Full'}
    >
      <View
        style={[
          styles.slotContainer,
          {
            backgroundColor: getStatusColor(),
          },
        ]}
      >
        <Text style={styles.timeText}>{timing}</Text>
        {sound && <Text style={styles.soundText}>{sound}</Text>}
        {status === 'Full' && <Text style={styles.fullText}>FULL</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default SlotCard;

const styles = StyleSheet.create({
  slotContainer: {
    height: 60,
    width: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  timeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  soundText: {
    fontSize: 9,
    color: Colors.white,
    marginTop: 2,
    textAlign: 'center',
  },
  fullText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.white,
    marginTop: 2,
  },
});
