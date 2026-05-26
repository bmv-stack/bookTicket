import { Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import FormInput from '../../components/formInput';
import { styles } from './LoginScreen.styles';
import { movieService } from '../../database/movieService';
import { useAuth } from '../../contexts/AuthContext';
import { Colors } from '../../theme/Color';

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();
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

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    const user = await movieService.logUser(form.email, form.password);
    console.log('Logged in user:', JSON.stringify(user));
    if (!user) {
      Alert.alert('Invalid Email or Password');
      return;
    }
    login(user);
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
                {
                  color: Colors.navigationLink,
                  textDecorationLine: 'underline',
                },
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
