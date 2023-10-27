import { configureStore } from '@reduxjs/toolkit';
import Flights from './Flights/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    Flights,
  },
});

export const useAppDispatch = () => useDispatch();
