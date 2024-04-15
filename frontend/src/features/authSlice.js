import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true', // Set isAuthenticated initially to false
    // refreshToken: null,

  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;//Data
      state.isAuthenticated = true; // Set isAuthenticated to true when user is logged in
      // state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('isAuthenticated', 'true'); 
    },
    clearUser(state) { 
      state.user = null;
      state.isAuthenticated = false; // Set isAuthenticated back to false when user logs out
      // state.refreshToken = null;
      localStorage.removeItem('isAuthenticated');
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
