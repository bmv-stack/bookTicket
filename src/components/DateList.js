import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../theme/Color';

const DateList = ({ item, selectedDate, setSelectedDate }) => {
  const isSelected = item.fullDate.trim() === selectedDate.trim();
  const [monthName, dayName] = item.dayName.split(' ');
  const backgroundColor = isSelected ? Colors.accent : Colors.white;
  const textColor = isSelected ? Colors.white : Colors.dateListText;
  return (
    <TouchableOpacity
      onPress={() => setSelectedDate(item.fullDate)}
      style={[styles.dateCard, { backgroundColor }]}
    >
      <Text style={[styles.dateNumber, { color: textColor }]}>
        {item.dayNumber}
      </Text>
      <Text style={[styles.dateMonthName, { color: textColor }]}>
        {monthName}
      </Text>
      <Text style={[styles.dateDay, { color: textColor }]}>{dayName}</Text>
    </TouchableOpacity>
  );
};

export default DateList;

const styles = StyleSheet.create({
  dateCard: {
    width: 55,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 10,
  },
  dateNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  dateDay: {
    fontSize: 9,
    marginTop: 6,
    marginBottom: 4,
    textAlign: 'center',
  },
  dateMonthName: {
    fontSize: 9,
    fontWeight: 'bold',
    color: Colors.dateMonth,
    marginTop: 1,
  },
});
