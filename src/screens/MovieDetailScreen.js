import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './MovieDetailScreen.styles';
import { useTranslation } from 'react-i18next';

const MovieDetailScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
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
          <Text style={styles.infoValue}>{movie.rating}</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>About Movie</Text>
        <Text style={styles.description}>{movie.description}</Text>
      </View>
      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>{t('common.detailsBook')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MovieDetailScreen;
