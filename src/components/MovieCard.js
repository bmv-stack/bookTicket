import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MovieCard = ({ movie }) => {
  const navigation = useNavigation();

  if (!movie) {
    return null;
  }

  const handlePress = () => {
    navigation.navigate('MovieDetail', { movie });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
        <View style={styles.cardContainer}>
          <Image
            source={{
              uri: movie.image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.movieInfo}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>⏱</Text>
              <Text style={styles.infoText}>{movie.duration}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>⭐</Text>
              <Text style={styles.infoText}>{movie.rating}</Text>
            </View>
          </View>
          <Text style={styles.movieText} numberOfLines={1}>
            {movie.name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: '#fff',
    height: 280,
    width: 120,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  movieInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  infoItem: {
    flex: 1,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    marginBottom: 2,
  },
  infoText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: '#ddd',
  },

  movieText: {
    padding: 9,
  },
});
