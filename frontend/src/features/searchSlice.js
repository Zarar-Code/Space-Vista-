import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  filteredData: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    filteredData: (state, action) => {
      const { city, selectedWorkspace } = action.payload;
      const searchTermCity = city.toLowerCase();
      const searchTermName = selectedWorkspace.toLowerCase();

      state.filteredData = state.data.filter((item) =>
        item.city.toLowerCase().includes(searchTermCity) &&
        item.selectedWorkspace.toLowerCase().includes(searchTermName)
      );
    },
  },
});

export const { setData, filteredData } = searchSlice.actions;
export default searchSlice.reducer;
