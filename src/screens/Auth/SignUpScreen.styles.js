import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  formContainer: {
    width: '85%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 15,
    shadowOpacity: 0.12,
    paddingHorizontal: 28,
    paddingVertical: 35,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35,
    color: Colors.infoText,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  halfWidthContainer: {
    flex: 1,
  },
  fieldsContainer: {
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  submitButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  navigationContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
  },
  navigationText: {
    textAlign: 'center',
    color: Colors.black,
  },
});
