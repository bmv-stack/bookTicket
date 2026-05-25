export const DUMMY_SLOT_DATA = [
  {
    id: '1',
    theatreId: '1',
    movieId: '3',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM',
    status: 'Available',
    soundSystem: 'Dolby Atmos',
    price: 180,
  },
  {
    id: '2',
    theatreId: '1',
    movieId: '5',
    date: new Date().toISOString().split('T')[0],
    time: '12:30 PM',
    status: 'Filling Fast',
    soundSystem: 'IMAX',
    price: 180,
  },
  {
    id: '3',
    theatreId: '1',
    movieId: '12',
    date: new Date().toISOString().split('T')[0],
    time: '3:00 PM',
    status: 'Available',
    soundSystem: '2K',
    price: 180,
  },
  {
    id: '4',
    theatreId: '1',
    movieId: '1',
    date: new Date().toISOString().split('T')[0],
    time: '5:30 PM',
    status: 'Full',
    soundSystem: 'Dolby Atmos',
    price: 200,
  },
  {
    id: '5',
    theatreId: '1',
    movieId: '8',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '8:00 PM',
    status: 'Filling Fast',
    soundSystem: 'IMAX',
    price: 220,
  },
  {
    id: '6',
    theatreId: '1',
    movieId: '16',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '10:30 PM',
    status: 'Available',
    soundSystem: 'Amour',
    price: 180,
  },
  {
    id: '7',
    theatreId: '2',
    movieId: '2',
    date: new Date().toISOString().split('T')[0],
    time: '11:00 AM',
    status: 'Available',
    soundSystem: '2K',
    price: 140,
  },
  {
    id: '8',
    theatreId: '2',
    movieId: '11',
    date: new Date().toISOString().split('T')[0],
    time: '2:30 PM',
    status: 'Available',
    soundSystem: 'Dolby Atmos',
    price: 170,
  },
  {
    id: '9',
    theatreId: '2',
    movieId: '7',
    date: new Date().toISOString().split('T')[0],
    time: '6:00 PM',
    status: 'Filling Fast',
    soundSystem: 'IMAX',
    price: 200,
  },
  {
    id: '10',
    theatreId: '2',
    movieId: '14',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '9:00 AM',
    status: 'Available',
    soundSystem: 'Amour',
    price: 120,
  },
  {
    id: '11',
    theatreId: '2',
    movieId: '4',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '1:00 PM',
    status: 'Full',
    soundSystem: '2K',
    price: 160,
  },
  {
    id: '12',
    theatreId: '3',
    movieId: '9',
    date: new Date().toISOString().split('T')[0],
    time: '10:15 AM',
    status: 'Available',
    soundSystem: 'Dolby Atmos',
    price: 160,
  },
  {
    id: '13',
    theatreId: '3',
    movieId: '15',
    date: new Date().toISOString().split('T')[0],
    time: '8:30 PM',
    status: 'Available',
    soundSystem: 'IMAX',
    price: 230,
  },
  {
    id: '14',
    theatreId: '3',
    movieId: '6',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '7:00 PM',
    status: 'Filling Fast',
    soundSystem: 'Amour',
    price: 210,
  },
  {
    id: '15',
    theatreId: '2',
    movieId: '3',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '4:00 PM',
    status: 'Available',
    soundSystem: 'Dolby Atmos',
    price: 180,
  },
  // --- NEWLY ADDED ENTRIES (16 to 35) ---
  {
    id: '16',
    theatreId: '1',
    movieId: '2',
    date: new Date().toISOString().split('T')[0],
    time: '01:15 PM',
    status: 'Available',
    soundSystem: 'Dolby Atmos',
    price: 190,
  },
  {
    id: '17',
    theatreId: '1',
    movieId: '10',
    date: new Date().toISOString().split('T')[0],
    time: '09:00 PM',
    status: 'Filling Fast',
    soundSystem: 'IMAX',
    price: 250,
  },
  {
    id: '18',
    theatreId: '3',
    movieId: '3',
    date: new Date().toISOString().split('T')[0],
    time: '01:45 PM',
    status: 'Available',
    soundSystem: '2K',
    price: 150,
  },
  {
    id: '19',
    theatreId: '3',
    movieId: '5',
    date: new Date().toISOString().split('T')[0],
    time: '04:30 PM',
    status: 'Full',
    soundSystem: 'Dolby Atmos',
    price: 180,
  },
  {
    id: '20',
    theatreId: '1',
    movieId: '7',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '11:00 AM',
    status: 'Available',
    soundSystem: 'Dolby Atmos',
    price: 180,
  },
  {
    id: '21',
    theatreId: '1',
    movieId: '9',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '02:00 PM',
    status: 'Available',
    soundSystem: '2K',
    price: 170,
  },
  {
    id: '22',
    theatreId: '2',
    movieId: '12',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '07:15 PM',
    status: 'Filling Fast',
    soundSystem: 'IMAX',
    price: 220,
  },
  {
    id: '23',
    theatreId: '2',
    movieId: '1',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '10:00 PM',
    status: 'Available',
    soundSystem: 'Dolby Atmos',
    price: 190,
  },
  {
    id: '24',
    theatreId: '3',
    movieId: '4',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '10:30 AM',
    status: 'Available',
    soundSystem: '2K',
    price: 140,
  },
  {
    id: '25',
    theatreId: '3',
    movieId: '11',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '01:15 PM',
    status: 'Filling Fast',
    soundSystem: 'Dolby Atmos',
    price: 180,
  },
  {
    id: '26',
    theatreId: '3',
    movieId: '8',
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0],
    time: '04:15 PM',
    status: 'Available',
    soundSystem: 'IMAX',
    price: 240,
  },
  // Day after tomorrow slots
  {
    id: '27',
    theatreId: '1',
    movieId: '3',
    date: new Date(new Date().setDate(new Date().getDate() + 2))
      .toISOString()
      .split('T')[0],
    time: '10:00 AM',
    status: 'Available',
    soundSystem: 'Dolby Atmos',
    price: 180,
  },
  {
    id: '28',
    theatreId: '1',
    movieId: '5',
    date: new Date(new Date().setDate(new Date().getDate() + 2))
      .toISOString()
      .split('T')[0],
    time: '03:30 PM',
    status: 'Available',
    soundSystem: 'IMAX',
    price: 200,
  },
  {
    id: '29',
    theatreId: '1',
    movieId: '14',
    date: new Date(new Date().setDate(new Date().getDate() + 2))
      .toISOString()
      .split('T')[0],
    time: '06:45 PM',
    status: 'Filling Fast',
    soundSystem: 'Dolby Atmos',
    price: 210,
  },
  {
    id: '30',
    theatreId: '2',
    movieId: '2',
    date: new Date(new Date().setDate(new Date().getDate() + 2))
      .toISOString()
      .split('T')[0],
    time: '11:30 AM',
    status: 'Available',
    soundSystem: '2K',
    price: 140,
  },
  {
    id: '31',
    theatreId: '2',
    movieId: '6',
    date: new Date(new Date().setDate(new Date().getDate() + 2))
      .toISOString()
      .split('T')[0],
    time: '03:00 PM',
    status: 'Available',
    soundSystem: 'Amour',
    price: 160,
  },
  {
    id: '32',
    theatreId: '2',
    movieId: '15',
    date: new Date(new Date().setDate(new Date().getDate() + 2))
      .toISOString()
      .split('T')[0],
    time: '08:30 PM',
    status: 'Available',
    soundSystem: 'IMAX',
    price: 230,
  },
  {
    id: '33',
    theatreId: '3',
    movieId: '12',
    date: new Date(new Date().setDate(new Date().getDate() + 2))
      .toISOString()
      .split('T')[0],
    time: '12:00 PM',
    status: 'Available',
    soundSystem: 'Dolby Atmos',
    price: 180,
  },
  {
    id: '34',
    theatreId: '3',
    movieId: '7',
    date: new Date(new Date().setDate(new Date().getDate() + 2))
      .toISOString()
      .split('T')[0],
    time: '05:00 PM',
    status: 'Filling Fast',
    soundSystem: 'IMAX',
    price: 220,
  },
  {
    id: '35',
    theatreId: '3',
    movieId: '10',
    date: new Date(new Date().setDate(new Date().getDate() + 2))
      .toISOString()
      .split('T')[0],
    time: '09:15 PM',
    status: 'Full',
    soundSystem: '2K',
    price: 170,
  },
];
