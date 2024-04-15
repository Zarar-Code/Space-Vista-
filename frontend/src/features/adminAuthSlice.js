import { createSlice } from '@reduxjs/toolkit';

const adminAuthSlice = createSlice({
  name: 'adminAuth',
  initialState: {
    admin: null,
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true', // Set isAuthenticated initially to false
  },
  reducers: {
    setAdmin(state, action) {
      state.admin = action.payload.admin;
      state.isAuthenticated = true; // Set isAuthenticated to true when user is logged in
      // state.accessToken = action.payload
      localStorage.setItem('isAuthenticated', 'true'); 
    },
    clearAdmin(state) { 
      state.admin = null;
      state.isAuthenticated = false; // Set isAuthenticated back to false when user logs out
      // state.accessToken = null
      localStorage.removeItem('isAuthenticated');
    },
  },
});

export const { setAdmin, clearAdmin } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
