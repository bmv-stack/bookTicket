import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice';
import cancelBookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    cancelBooking: cancelBookingReducer,
  },
});
