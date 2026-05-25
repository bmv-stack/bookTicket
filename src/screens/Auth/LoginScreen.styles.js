import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c9bebe',
  },
  formContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#ca2020',
    shadowOffset: { width: 0, height: 1 },
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
    color: '#333',
  },
  fieldsContainer: {
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: '#eb4e63',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 1,
    shadowColor: '#eb4e63',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  submitButtonText: {
    color: '#fff',
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
    color: '#000',
  },
});
