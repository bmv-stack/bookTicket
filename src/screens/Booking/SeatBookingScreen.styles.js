import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginTop: 5,
    flexDirection: 'row',
    height: 'auto',
    width: '100%',
    backgroundColor: '#2c2c2c',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  headerContent: {
    flex: 1,
  },
  movieText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  movieDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  movieDetail: {
    fontSize: 12,
    color: '#b3b3b3',
    marginHorizontal: 4,
  },
  seatBase: {
    width: 40,
    height: 40,
    margin: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aisleSeat: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  seatReserved: {
    backgroundColor: '#e0e0e0',
    borderColor: '#bdbdbd',
  },
  seatSelected: {
    backgroundColor: '#4CD964',
    borderColor: '#4CD964',
  },
  seatContainer: {
    marginTop: '10%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  screenContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  screen: {
    width: '70%',
    height: 6,
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
  },
  screenText: {
    fontSize: 10,
    color: '#888',
    marginTop: 6,
    letterSpacing: 2,
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fafafa',
  },
  footerText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 12,
  },
  bold: {
    fontWeight: 'bold',
    color: '#222',
  },
  bookButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bookButtonDisbaled: {
    backgroundColor: '#8f8a8a',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
});
