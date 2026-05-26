import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/Color';

export default EmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyIcon}>🎬</Text>
      <Text style={styles.emptyText}>No Showtimes Available</Text>
      <Text style={styles.hintText}>
        Try selecting a different date from the calendar.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    gap: 8,
  },
  emptyIcon: {
    fontSize: 36,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.infoText,
  },
  hintText: {
    fontSize: 13,
    color: Colors.hintText,
  },
});
