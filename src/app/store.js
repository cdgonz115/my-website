import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import contributionReducer from '../features/contribution/contributionSlice'

export const store = configureStore({
  reducer: {
    contribution: contributionReducer
  },
});
