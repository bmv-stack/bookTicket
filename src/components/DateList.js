import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const DateList = ({ item, selectedDate, setSelectedDate }) => {
  const isSelected = item.fullDate.trim() === selectedDate.trim();
  const [monthName, dayName] = item.dayName.split(' ');
  const backgroundColor = isSelected ? '#eb4e63' : '#fff';
  const textColor = isSelected ? '#fff' : '#232222';
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
    color: '#000',
  },
  dateDay: {
    fontSize: 9,
    color: '#252581',
    marginTop: 6,
    marginBottom: 4,
    textAlign: 'center',
  },
  dateMonthName: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#8E8E93',
    marginTop: 1,
  },
});
