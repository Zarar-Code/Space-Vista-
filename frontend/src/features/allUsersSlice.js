// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getAllUsers = createAsyncThunk('getAllUsers', async () => {
//   const response = await axios.get('/api/v1/admin/AdminUsers');
//   return response.data;
// });

// const initialState = {
//   users: [],
//   status: 'idle',
//   error: null,
// };

// const allUsersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllUsers.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(getAllUsers.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.users = action.payload;
//       })
//       .addCase(getAllUsers.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const selectAllUsers = (state) => state.users;


// export default allUsersSlice.reducer;
