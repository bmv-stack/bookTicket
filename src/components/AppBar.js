import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AppBar = ({ title = 'TicketBook', children }) => {
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate('Search');
  };
  const handleProfile = () => {
    navigation.navigate('UserProfile');
  };
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.align}>
            <Text style={styles.appTitle}>{title}</Text>
          </View>
          <View style={styles.alignRight}>
            <TouchableOpacity onPress={handleSearch}>
              <Icon name="search" size={22} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleProfile}>
              <Icon name="person-sharp" size={22} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      {children}
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 60,
    padding: 10,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  alignLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignRight: {
    flexDirection: 'row',
    gap: 20,
  },
});
