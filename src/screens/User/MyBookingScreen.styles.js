import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Color';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  ticketCard: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.infoText,
    marginBottom: 4,
  },
  detailsText: { fontSize: 14, color: Colors.label, marginBottom: 2 },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.priceText,
    marginTop: 4,
  },
  emptyList: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: Colors.subtitle,
    marginTop: 40,
  },
});
