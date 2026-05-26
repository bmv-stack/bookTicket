import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../src/theme/Color';
import { toggleLng } from '../utils/toggleLng';

const AppBar = ({ title = 'TicketBook', children }) => {
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate('Search');
  };
  const handleProfile = () => {
    navigation.navigate('UserProfile');
  };
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <View style={styles.container}>
        <View style={styles.align}>
          <Text style={styles.appTitle}>{title}</Text>
        </View>
        <View style={styles.alignRight}>
          <TouchableOpacity onPress={handleSearch}>
            <Icon name="search" size={22} color={Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleLng}>
            <Icon name="language" size={22} color={Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfile}>
            <Icon name="person-sharp" size={22} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
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
    height: 80,
    padding: 8,
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
