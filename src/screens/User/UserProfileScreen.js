import { Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { menuItems } from '../../data/USER_OPTIONS_DATA';
import UserOptions from '../../components/UserOptions';
import { useAuth } from '../../contexts/AuthContext';
import { styles } from './UserProfileScreen.styles';

const UserProfileScreen = ({ navigation }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          logout();
          navigation.replace('Login');
        },
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Test User</Text>
          <Text style={styles.userEmail}>test.user12@gmail.com</Text>
          <Text style={styles.userPhone}>+91 1234567890</Text>
        </View>
      </View>

      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <UserOptions
            item={item}
            onPress={route => {
              if (route) {
                navigation.navigate(route);
              }
            }}
          />
        )}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        style={styles.menuContainer}
      />

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
