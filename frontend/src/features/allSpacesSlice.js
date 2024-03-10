import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllSpaces = createAsyncThunk('getAllSpaces', async () => {
  const response = await axios.get('/api/v1/allSpaces');
  return response.data;
});

const initialState = {
  spaces: [],
  status: 'idle',
  error: null,
};

const allSpacesSlice = createSlice({
  name: 'spaces',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSpaces.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllSpaces.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.spaces = action.payload;
      })
      .addCase(getAllSpaces.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllSpaces = (state) => state.spaces.spaces;

// Selector to get a space by ID
export const selectSpaceById = (state, spaceId) =>
  state.spaces.spaces.find((space) => space._id === spaceId);

export default allSpacesSlice.reducer;
