import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Color';

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
    shadowColor: Colors.shadowColor,
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
    color: Colors.white,
    marginBottom: 10,
  },
  movieDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  movieDetail: {
    fontSize: 12,
    color: Colors.label,
    marginHorizontal: 4,
  },
  seatBase: {
    width: 40,
    height: 40,
    margin: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.seatBase,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aisleSeat: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  seatReserved: {
    backgroundColor: Colors.white,
    borderColor: Colors.reservedSeat,
  },
  seatSelected: {
    backgroundColor: Colors.selectedSeat,
    borderColor: Colors.selectedSeat,
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
    backgroundColor: Colors.screenLine,
    borderRadius: 20,
  },
  screenText: {
    fontSize: 10,
    color: Colors.screenText,
    marginTop: 6,
    letterSpacing: 2,
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  footerText: {
    fontSize: 16,
    color: Colors.infoText,
    marginBottom: 12,
  },
  bold: {
    fontWeight: 'bold',
    color: Colors.valueTitle,
  },
  bookButton: {
    backgroundColor: Colors.bookButton,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  bookButtonDisbaled: {
    backgroundColor: Colors.disabled,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
});
