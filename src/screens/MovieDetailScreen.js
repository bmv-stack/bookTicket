import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const MovieDetailScreen = ({ route, navigation }) => {
  const { movie } = route.params;
  const handleBooking = () => {
    navigation.navigate('Booking', { movie: movie });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: movie.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.movieName}>{movie.name}</Text>
      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Duration</Text>
          <Text style={styles.infoValue}>{movie.duration}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Rating</Text>
          <Text style={styles.infoValue}>⭐ {movie.rating}</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>About Movie</Text>
        <Text style={styles.description}>{movie.description}</Text>
      </View>
      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
  },
  movieName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
  },
  infoBox: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 12,
  },
  infoLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  descriptionContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    textAlign: 'justify',
  },
  bookButton: {
    marginHorizontal: 16,
    marginBottom: 32,
    backgroundColor: '#e91e63',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
