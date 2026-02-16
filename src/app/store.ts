import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    // This is where we add more slices later (e.g., dashboard: dashboardReducer)
    auth: authReducer, 
  },
});

// These types help TypeScript understand our specific store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;