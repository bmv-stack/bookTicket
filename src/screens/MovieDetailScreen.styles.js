import { StyleSheet } from 'react-native';
import { Colors } from '../theme/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
  },
  movieName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    color: Colors.infoText,
  },
  infoRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
  },
  infoBox: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 12,
  },
  infoLabel: {
    fontSize: 12,
    color: Colors.subtitle,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.infoText,
  },
  descriptionContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.infoText,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: Colors.label,
    lineHeight: 22,
    textAlign: 'justify',
  },
  bookButton: {
    marginHorizontal: 16,
    marginBottom: 32,
    backgroundColor: Colors.bookButton,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
});
