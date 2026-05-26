import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/Color';

const MovieCard = ({ movie }) => {
  const navigation = useNavigation();

  if (!movie) return null;

  const handlePress = () => {
    navigation.navigate('MovieDetail', { movie });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={handlePress}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: movie.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.ratingBadge}>
          <Icon name="star" size={10} color={Colors.movieRating} />
          <Text style={styles.ratingText}>
            {Number(movie.rating).toFixed(1)}
          </Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.movieTitle} numberOfLines={1}>
          {movie.name}
        </Text>
        <View style={styles.durationRow}>
          <Icon name="time-outline" size={11} color={Colors.subtitle} />
          <Text style={styles.durationText}>{movie.duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    width: 130,
    borderRadius: 14,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 190,
  },
  ratingBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: Colors.black,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 20,
  },
  ratingText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.white,
  },
  infoContainer: {
    padding: 10,
    gap: 4,
  },
  movieTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.title,
  },
  durationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  durationText: {
    fontSize: 11,
    color: Colors.subtitle,
    fontWeight: '500',
  },
});
