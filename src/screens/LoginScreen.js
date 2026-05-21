import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import FormInput from '../components/formInput';

const LoginScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChangeText = (fieldName, text) => {
    setForm(prevState => ({
      ...prevState,
      [fieldName]: text,
    }));
  };

  const handleSubmit = () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Success', `Email: ${form.email}\nPassword: ${form.password}`);
    navigation.navigate('Home');
  };
  const handleCreateNow = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>Ticket Booking App</Text>
        <View style={styles.fieldsContainer}>
          <FormInput
            label="Email"
            placeholder="Enter your email"
            value={form.email}
            onChangeText={text => onChangeText('email', text)}
            keyboardType="email-address"
          />
          <FormInput
            label="Password"
            placeholder="Enter your password"
            value={form.password}
            onChangeText={text => onChangeText('password', text)}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.navigationContainer}>
          <Text style={styles.navigationText}>Don't have a account? </Text>
          <TouchableOpacity onPress={handleCreateNow}>
            <Text
              style={[
                styles.navigationText,
                { color: '#007AFF', textDecorationLine: 'underline' },
              ]}
            >
              {' '}
              Create Now!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
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
    shadowColor: '#000',
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
