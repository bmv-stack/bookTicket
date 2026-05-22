import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/Auth/LoginScreen';
import SignUpScreen from './src/screens/Auth/SignUpScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import BookingScreen from './src/screens/Booking/BookingScreen';
import SeatBookingScreen from './src/screens/Booking/SeatBookingScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import UserProfileScreen from './src/screens/User/UserProfileScreen';
import MyBookingsScreen from './src/screens/User/MyBookingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        contentStyle: { backgroundColor: '#fff' },
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen
        name="MyBookings"
        component={MyBookingsScreen}
        options={{ title: 'My Bookings' }}
      />
    </Stack.Navigator>
  );
};
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <RootStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
