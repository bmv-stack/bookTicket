import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import { DUMMY_DATA } from '../data/DUMMY_DATA';

const SearchScreen = () => {
  const [input, setInput] = useState('');
  const onChangeText = text => {
    setInput(text);
  };
  const filteredMovies = DUMMY_DATA.filter(movie => {
    const movieTitle = movie.name.toLowerCase();
    const searchInput = input.toLowerCase();

    return movieTitle.includes(searchInput);
  });
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          value={input}
          onChangeText={onChangeText}
          placeholder="Search Movies..."
          autoCapitalize="none"
        />
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredMovies}
          keyExtractor={item => item.id}
          columnWrapperStyle={styles.row}
          ItemSeparatorComponent={() => (
            <View style={{ width: 10, height: 30 }} />
          )}
          numColumns={2}
          renderItem={({ item }) => <MovieCard movie={item} />}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  searchContainer: {
    marginTop: 15,
    padding: 10,
    height: 40,
    width: '80%',
    borderColor: '#807878',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 16,
    marginLeft: 65,
  },
  row: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: 12,
  },
});
