import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState, useMemo } from 'react';
import MovieCard from '../components/MovieCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { DUMMY_DATA } from '../data/DUMMY_DATA';
import { Colors } from '../theme/Color';

const ALL_GENRES = [
  'All',
  ...new Set(DUMMY_DATA.flatMap(movie => movie.genre)),
].sort();

const SearchScreen = () => {
  const [input, setInput] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const filteredMovies = useMemo(() => {
    return DUMMY_DATA.filter(movie => {
      const matchesSearch = movie.name
        .toLowerCase()
        .includes(input.toLowerCase());
      const matchesGenre =
        selectedGenre === 'All' || movie.genre.includes(selectedGenre);
      return matchesSearch && matchesGenre;
    });
  }, [input, selectedGenre]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" color="#b3a7a7" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          value={input}
          onChangeText={setInput}
          placeholder="Search movies..."
          autoCapitalize="none"
          placeholderTextColor={Colors.hintText}
        />
        {input.length > 0 && (
          <TouchableOpacity onPress={() => setInput('')}>
            <Text style={styles.clearIcon}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.pillWrapperContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.genreList}
        >
          {ALL_GENRES.map((genre, index) => (
            <TouchableOpacity
              key={`genre-${index}-${genre}`}
              style={[
                styles.genrePill,
                selectedGenre === genre && styles.genrePillActive,
              ]}
              onPress={() => setSelectedGenre(genre)}
            >
              <Text
                style={[
                  styles.genrePillText,
                  selectedGenre === genre && styles.genrePillTextActive,
                ]}
              >
                {genre}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Text style={styles.resultsText}>
        {filteredMovies.length}{' '}
        {filteredMovies.length === 1 ? 'movie' : 'movies'} found
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredMovies}
        keyExtractor={item => String(item.id)}
        columnWrapperStyle={styles.row}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        numColumns={2}
        contentContainerStyle={styles.cardContainer}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No movies found</Text>
            <Text style={styles.emptySubText}>
              Try a different search or genre
            </Text>
          </View>
        )}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    height: 44,
    backgroundColor: Colors.white,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderRadius: 12,
    gap: 8,
  },
  searchIcon: {
    fontSize: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.searchInput,
  },
  clearIcon: {
    fontSize: 12,
    color: Colors.cross,
    padding: 4,
  },
  pillWrapperContainer: {
    height: 60,
    marginVertical: 5,
  },
  genreList: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  genrePill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genrePillActive: {
    backgroundColor: Colors.activeGenrePill,
    borderColor: Colors.activeGenrePill,
  },
  genrePillText: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.label,
  },
  genrePillTextActive: {
    color: Colors.white,
  },
  resultsText: {
    fontSize: 12,
    color: Colors.subtitle,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  cardContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 60,
    gap: 6,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.label,
  },
  emptySubText: {
    fontSize: 13,
    color: Colors.subtitle,
  },
});
