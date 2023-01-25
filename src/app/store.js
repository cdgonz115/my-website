import { configureStore } from '@reduxjs/toolkit';
import contributionReducer from '../features/contribution/contributionSlice'

export const store = configureStore({
  reducer: {
    contribution: contributionReducer
  },
});
