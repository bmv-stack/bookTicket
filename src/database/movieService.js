import { db } from './db';

export const movieService = {
  addUser: async (name, email, password) => {
    try {
      const result = await db.execute(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        [name, email, password],
      );
      return result.rowsAffected > 0;
    } catch (error) {
      if (error.message.includes('UNIQUE constraint failed')) {
        return 'duplicate';
      }
      console.error('Unable to add the user', error);
    }
  },
  logUser: async (email, password) => {
    try {
      const result = await db.execute(
        `SELECT id, name, email FROM users WHERE email = ? AND password = ?;`,
        [email, password],
      );
      const check = await db.execute('SELECT * FROM users');
      console.log('All users in DB:', JSON.stringify(check.rows));
      if (result.rows.length > 0) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      console.error('Unable to login', error);
      return null;
    }
  },
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
  getBookedSeats: async slotId => {
    try {
      const query = 'SELECT selected_seats FROM bookings WHERE slot_id = ?;';
      const result = await db.execute(query, [Number(slotId)]);
      const rows = result.rows || [];

      let bookedSeats = [];
      for (const row of rows) {
        if (row.selected_seats) {
          const seatArray = row.selected_seats.split(',').map(s => s.trim());
          bookedSeats = [...bookedSeats, seatArray];
        }
      }
      return bookedSeats;
    } catch (error) {
      console.error('Failed to get booked seats: ', error);
    }
  },
  createBooking: async (
    userId,
    slotId,
    seatsArray,
    payableAmount,
    bookingDate,
  ) => {
    try {
      const query =
        'INSERT INTO bookings (user_id, slot_id, selected_seats, payable_amount, booking_date) VALUES (?,?,?,?,?);';
      const seats = Array.isArray(seatsArray)
        ? seatsArray.join(',')
        : seatsArray;
      const result = await db.execute(query, [
        Number(userId),
        Number(slotId),
        seats,
        payableAmount,
        bookingDate,
      ]);
      return result.rowsAffected > 0;
    } catch (error) {
      console.error('Unable to complete transaction: ', error);
    }
  },
  getBookings: async userId => {
    try {
      const query = `SELECT b.id, 
    b.selected_seats, 
    b.payable_amount, 
    b.booking_date, 
    s.time AS slot_time, 
    m.name AS movie_name, 
    m.image AS movie_image, 
    t.name AS theatre_name, 
    t.brand AS theatre_brand 
    FROM bookings b 
    INNER JOIN slots s ON b.slot_id = s.id 
    INNER JOIN movies m ON s.movie_id = m.id 
    INNER JOIN theatres t ON s.theatre_id = t.id 
    WHERE b.user_id = ? 
    ORDER BY b.id DESC;`;

      const result = await db.execute(query, [Number(userId)]);
      return result.rows || [];
    } catch (error) {
      console.error('Unable to fetch bookings: ', error);
      return [];
    }
  },
};
