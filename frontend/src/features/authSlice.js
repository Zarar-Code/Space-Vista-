// authSlice.js

import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios'; // Import axios for making API requests

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

// Updated loginUser action creator with API call
// export const loginUser = (userData) => async (dispatch) => {
//   try {
//     const response = await axios.post('/api/v1/users/login', userData);
//     dispatch(setUser(response.data.user));
//     localStorage.setItem('token', response.data.token);
//   } catch (error) {
//     console.error('Login Error:', error);
//   }
// };

// Updated logoutUser action creator with API call
// export const logoutUser = () => async (dispatch) => {
//   try {
//     // Make API call to log out the user
//     await axios.post('/api/v1/users/logout');
    
//     // Clear user data from the Redux store
//     dispatch(clearUser());
    
//     // Remove token from localStorage if needed
//     // localStorage.removeItem('token');
//   } catch (error) {
//     console.error('Logout Error:', error);
//   }
// };

export default authSlice.reducer;
