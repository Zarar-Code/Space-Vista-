import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
// import userReducer from './features/userSlice';
import searchReducer from './features/searchSlice'
import allSpacesReducer from './features/allSpacesSlice';

const persistedAuthState = localStorage.getItem('isAuthenticated') === 'true';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // users: userReducer,
    spaces: allSpacesReducer,
    search: searchReducer
  },
  preloadedState: {
    auth: {
      isAuthenticated: persistedAuthState,
    },
  }
});
