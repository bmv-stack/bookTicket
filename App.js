import { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/Auth/LoginScreen';
import SignUpScreen from './src/screens/Auth/SignUpScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import BookingScreen from './src/screens/Booking/BookingScreen';
import SeatBookingScreen from './src/screens/Booking/SeatBookingScreen';
import PaymentScreen from './src/screens/Payment/PaymentScreen';
import UserProfileScreen from './src/screens/User/UserProfileScreen';
import MyBookingsScreen from './src/screens/User/MyBookingsScreen';
import LoadingIndicator from './src/components/LoadingIndicator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider } from 'react-redux';
// import { store } from './src/redux/store';
import { seedDatabaseIfEmpty } from './src/database/seeder';
import { initDb } from './src/database/db';
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import { Colors } from './src/theme/Color';

const Stack = createNativeStackNavigator();

const RootStack = ({ initialRoute }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        contentStyle: { backgroundColor: '#fff' },
      }}
      initialRouteName={initialRoute}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false, animation: 'fade' }}
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
        options={{ title: 'Movie Details', animation: 'slide_from_bottom' }}
      />
      <Stack.Screen
        name="SeatBooking"
        component={SeatBookingScreen}
        options={{ title: 'Select Seats', animation: 'fade' }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ animation: 'fade' }}
      />

      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{ title: 'Book a slot', animation: 'fade' }}
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
const AppContent = () => {
  const [dbReady, setDbReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState(null);
  const { autoLogin } = useAuth();
  useEffect(() => {
    const setup = async () => {
      await initDb();
      await seedDatabaseIfEmpty();
      const isLoggedIn = await autoLogin();
      setInitialRoute(isLoggedIn ? 'Home' : 'Login');
      setDbReady(true);
    };
    setup();
  }, []);
  if (!dbReady) {
    return <LoadingIndicator />;
  }
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack initialRoute={initialRoute} />
      </SafeAreaProvider>
    </NavigationContainer>
    // </Provider>
  );
};
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
