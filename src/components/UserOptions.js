import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../theme/Color';

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
    borderBottomColor: Colors.borderColor,
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
    color: Colors.infoText,
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
    color: Colors.subtitle,
  },
  menuArrow: {
    fontSize: 20,
    color: Colors.white,
  },
});
