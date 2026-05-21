import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import FormInput from '../components/formInput';

const SignUpScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeText = (fieldName, text) => {
    setForm(prevState => ({
      ...prevState,
      [fieldName]: text,
    }));
  };

  const handleSubmit = () => {
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (form.password !== form.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    Alert.alert('Success', 'Account created successfully!');
    navigation.navigate('Home', { username: form.firstName });
  };

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>Ticket Booking App</Text>

        <View style={styles.rowContainer}>
          <View style={styles.halfWidthContainer}>
            <FormInput
              label="First Name"
              placeholder="Enter first name"
              value={form.firstName}
              onChangeText={text => onChangeText('firstName', text)}
            />
          </View>
          <View style={styles.halfWidthContainer}>
            <FormInput
              label="Last Name"
              placeholder="Enter last name"
              value={form.lastName}
              onChangeText={text => onChangeText('lastName', text)}
            />
          </View>
        </View>

        <View style={styles.fieldsContainer}>
          <FormInput
            label="Email"
            placeholder="Enter your email"
            value={form.email}
            onChangeText={text => onChangeText('email', text)}
            keyboardType="email-address"
          />
          <FormInput
            label="Set Password"
            placeholder="Enter your password"
            value={form.password}
            onChangeText={text => onChangeText('password', text)}
            //secureTextEntry
          />
          <FormInput
            label="Confirm Password"
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChangeText={text => onChangeText('confirmPassword', text)}
            //secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.navigationContainer}>
          <Text style={styles.navigationText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleBackToLogin}>
            <Text
              style={[
                styles.navigationText,
                { color: '#007AFF', textDecorationLine: 'underline' },
              ]}
            >
              {' '}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
    backgroundColor: '#eb4e63',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
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
