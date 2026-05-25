import { db } from './db';
import { DUMMY_DATA } from '../data/DUMMY_DATA';
import { DUMMY_SLOT_DATA } from '../data/DUMMY_SLOT_DATA';
import { DUMMY_THEATRE_DATA } from '../data/DUMMY_THEATRE_DATA';

export const seedDatabaseIfEmpty = async () => {
  const movieCountResult = await db.execute(
    'SELECT COUNT(*) as count FROM movies',
  );
  console.log('Raw Result: ', JSON.stringify(movieCountResult));
  const hasMovies =
    movieCountResult.rows.length > 0 && movieCountResult.rows[0].count > 0;

  if (hasMovies) {
    console.log('Database already init');
    return;
  }
  console.log('Seeding local dummy files');

  for (const movie of DUMMY_DATA) {
    await db.execute(
      'INSERT OR REPLACE INTO movies (id, image, name, duration, rating, description) VALUES (?, ?, ?, ?, ?, ?)',
      [
        Number(movie.id),
        movie.image,
        movie.name,
        movie.duration,
        movie.rating,
        movie.description,
      ],
    );
  }
  for (const theatre of DUMMY_THEATRE_DATA) {
    await db.execute(
      'INSERT OR REPLACE INTO theatres (id, brand, name, city) VALUES (?, ?, ?, ?)',
      [Number(theatre.id), theatre.brand, theatre.name, theatre.city],
    );
  }
  for (const slot of DUMMY_SLOT_DATA) {
    await db.execute(
      'INSERT OR REPLACE INTO slots (id,  movie_id, theatre_id, date, time, status, sound_system, price) VALUES (?, ?, ?, ?, ?, ? , ?, ?)',
      [
        Number(slot.id),
        Number(slot.movieId),
        Number(slot.theatreId),
        slot.date,
        slot.time,
        slot.status,
        slot.soundSystem,
        slot.price,
      ],
    );
  }
  console.log('Seeding complete...');
};
