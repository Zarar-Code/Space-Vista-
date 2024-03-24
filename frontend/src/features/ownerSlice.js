    import { createSlice } from '@reduxjs/toolkit';
    import axios from 'axios';

    const ownerSlice = createSlice({
    name: 'owner',
    initialState: {
        owner: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchOwnerStart: (state) => {
        state.loading = true;
        state.error = null;
        },
        fetchOwnerSuccess: (state, action) => {
        state.loading = false;
        state.owner = action.payload;
        },
        fetchOwnerFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        },
    },
    });

    export const { fetchOwnerStart, fetchOwnerSuccess, fetchOwnerFailure } = ownerSlice.actions;

    // Async action to fetch owner details based on ID
    export const fetchOwnerById = (ownerId) => async (dispatch) => {
    dispatch(fetchOwnerStart());
    try {
        const response = await axios.get(`/api/v1/users/${ownerId}`);
        console.log("Owner Data from API:", response.data)
        dispatch(fetchOwnerSuccess(response.data));
    } catch (error) {
        dispatch(fetchOwnerFailure(error.message));
    }
    };

    export default ownerSlice.reducer;
