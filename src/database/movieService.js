import { db } from './db';

export const movieService = {
  getAllMovies: async () => {
    try {
      const result = await db.execute('SELECT * FROM movies');
      if (result && result.rows) {
        return result.rows || [];
      }
      return [];
    } catch (error) {
      console.error('Failed to fetch movies: ', error);
      return [];
    }
  },
  getSlotsForMovieAndDate: async (movieId, selectedDate) => {
    try {
      const query = `SELECT s.id AS slotId, 
      s.time AS slotTime, 
      s.price AS ticketPrice, 
      s.status AS slotStatus, 
      s.sound_system AS SoundSystem, 
      t.id AS theatreId, 
      t.name AS theatreName, 
      t.brand AS theatreBrand, 
      t.city AS theatreCity 
      FROM slots s 
      INNER JOIN theatres t On s.theatre_id = t.id 
      WHERE s.movie_id = ? AND s.date = ?;`;

      const result = await db.execute(query, [Number(movieId), selectedDate]);
      if (result && result.rows) {
        return result.rows || [];
      }
      return [];
    } catch (error) {
      console.error('Uable to load slots for movies: ', error);
    }
  },
};
