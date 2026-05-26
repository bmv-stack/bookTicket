import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Color';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  dateListContainer: {
    height: 70,
    borderTopWidth: 1,
    borderColor: Colors.dateListBorder,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  bookingContainer: {
    flex: 1,
  },
});
