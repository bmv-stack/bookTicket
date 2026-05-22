import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const UserOptions = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => onPress(item.navigate)}
    >
      <Text style={styles.menuIcon}>{item.icon}</Text>
      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>{item.title}</Text>
        <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
      </View>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
  );
};

export default UserOptions;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#999',
  },
  menuArrow: {
    fontSize: 20,
    color: '#ccc',
  },
});
