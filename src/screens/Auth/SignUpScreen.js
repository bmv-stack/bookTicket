import { Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import FormInput from '../../components/formInput';
import { styles } from './SignUpScreen.styles';
import { movieService } from '../../database/movieService';

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

  const handleSubmit = async () => {
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
    const fullName = `${form.firstName} ${form.lastName}`;
    const result = await movieService.addUser(
      fullName,
      form.email,
      form.password,
    );
    if (result === 'duplicate') {
      Alert.alert('User already exists. Please Sign In instead of Sign Up');
      return;
    }
    if (!result) {
      Alert.alert('Unable to add the user, please try again later');
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
