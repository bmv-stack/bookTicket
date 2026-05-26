import {
  FlatList,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar';
import MovieCard from '../../components/MovieCard';
import LoadingIndicator from '../../components/LoadingIndicator';
import { movieService } from '../../database/movieService';
import { styles } from './HomeScreen.styles';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await movieService.getAllMovies();
      setMovies(data);
      setLoading(false);
    };
    fetchMovies();
  }, []);
  return (
    <AppBar>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.greetingsContainer}>
            <Text style={styles.greetingText}>{t('common.greet')}</Text>
            <Text style={[styles.greetingText, { fontWeight: 'bold' }]}>
              {' '}
              {user?.name}
            </Text>
          </View>
          <View style={styles.recommendedContainer}>
            <Text style={styles.recommendedText}>
              {t('common.recommended')}
            </Text>
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
            <Text style={styles.recommendedText}>{t('common.allTime')}</Text>
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
            <Text style={styles.recommendedText}>{t('common.trending')}</Text>
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
      )}
    </AppBar>
  );
};

export default HomeScreen;
