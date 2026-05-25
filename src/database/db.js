import { open } from '@op-engineering/op-sqlite';

export const db = open({
  name: 'movies_db.sqlite',
});

export const initDb = async () => {
  try {
    await db.execute('PRAGMA foreign_keys = ON;');

    await db.execute(
      `CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP);`,
    );
    await db.execute(
      `CREATE TABLE IF NOT EXISTS movies(
        id INTEGER PRIMARY KEY,
        image TEXT,
        name TEXT NOT NULL,
        duration TEXT NOT NULL,
        rating REAL,
        description TEXT);`,
    );
    await db.execute(
      `CREATE TABLE IF NOT EXISTS theatres(
        id INTEGER PRIMARY KEY,
        brand TEXT NOT NULL,
        name TEXT NOT NULL,
        city TEXT NOT NULL);`,
    );
    await db.execute(
      `CREATE TABLE IF NOT EXISTS slots(
        id INTEGER PRIMARY KEY,
        movie_id INTEGER NOT NULL,
        theatre_id INTEGER NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        status TEXT NOT NULL,
        sound_system TEXT,
        price REAL NOT NULL,
        FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE,
        FOREIGN KEY (theatre_id) REFERENCES theatres(id) ON DELETE CASCADE);`,
    );
    await db.execute(
      `CREATE TABLE IF NOT EXISTS bookings(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        slot_id INTEGER NOT NULL,
        selected_seats TEXT NOT NULL,
        payable_amount REAL NOT NULL,
        booking_date TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (slot_id) REFERENCES slots(id) ON DELETE CASCADE);`,
    );
    console.log('Database created successfully');
  } catch (error) {
    console.error('Unable to create the database', error);
  }
};
