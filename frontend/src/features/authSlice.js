import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false, // Set isAuthenticated initially to false
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true; // Set isAuthenticated to true when user is logged in
    },
    clearUser(state) { 
      state.user = null;
      state.isAuthenticated = false; // Set isAuthenticated back to false when user logs out
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
