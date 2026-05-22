import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    myBookings: [],
  },
  reducers: {
    addBooking: (state, action) => {
      state.myBookings.unshift(action.payload);
    },
    cancelBooking: (state, action) => {
      state.myBookings = state.myBookings.filter(
        booking => String(booking.id) !== String(action.payload),
      );
    },
  },
});

export const { addBooking, cancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
