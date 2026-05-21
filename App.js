import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import BookingScreen from './src/screens/BookingScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        contentStyle: { backgroundColor: '#fff' },
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{ title: 'Movie Details' }}
      />
      <Stack.Screen
        name="SeatBooking"
        component={SeatBookingScreen}
        options={{ title: 'Select Seats' }}
      />
      <Stack.Screen name="Payment" component={PaymentScreen} />

      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{ title: 'Book a slot' }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{ title: 'Your Profile' }}
      />
    </Stack.Navigator>
  );
};
function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
