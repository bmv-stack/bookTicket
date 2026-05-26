import { FlatList, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar';
import MovieCard from '../../components/MovieCard';
import { movieService } from '../../database/movieService';
import { styles } from './HomeScreen.styles';
import { useAuth } from '../../contexts/AuthContext';

const HomeScreen = ({ route }) => {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await movieService.getAllMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);
  return (
    <AppBar>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.greetingsContainer}>
          <Text style={styles.greetingText}>Greetings,</Text>
          <Text style={[styles.greetingText, { fontWeight: 'bold' }]}>
            {' '}
            {user?.name}
          </Text>
        </View>
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedText}>Recommended Movies</Text>
        </View>
        <View style={styles.list}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={movies}
            keyExtractor={item => String(item.id)}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            renderItem={({ item }) => <MovieCard movie={item} />}
          />
        </View>
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedText}>All Time Favourites</Text>
        </View>
        <View style={styles.list}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={movies}
            keyExtractor={item => String(item.id)}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            renderItem={({ item }) => <MovieCard movie={item} />}
          />
        </View>
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedText}>Trending Movies</Text>
        </View>
        <View style={styles.list}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={movies}
            keyExtractor={item => String(item.id)}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            renderItem={({ item }) => <MovieCard movie={item} />}
          />
        </View>
      </ScrollView>
    </AppBar>
  );
};

export default HomeScreen;
