import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar';
import MovieCard from '../../components/MovieCard';
import { movieService } from '../../database/movieService';
import { styles } from './HomeScreen.styles';

const HomeScreen = ({ route }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await movieService.getAllMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);
  const userName = route.params?.username;
  console.log('Username: ', userName);
  return (
    <AppBar>
      <View style={styles.container}>
        <View style={styles.greetingsContainer}>
          <Text style={styles.greetingText}>Greetings,</Text>
          <Text style={[styles.greetingText, { fontWeight: 'bold' }]}>
            {' '}
            {userName}
          </Text>
        </View>
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedText}>Recommended Movies</Text>
        </View>
        <View>
          <View style={{ padding: 10 }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={movies}
              keyExtractor={item => String(item.id)}
              ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
              renderItem={({ item }) => <MovieCard movie={item} />}
            />
          </View>
        </View>
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedText}>Top Movies</Text>
        </View>
      </View>
    </AppBar>
  );
};

export default HomeScreen;
