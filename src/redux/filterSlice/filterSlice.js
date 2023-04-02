import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;
