import { addListener, createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: 'sad',
  reducers: {
    filterContacts(state, action) {
      state.push(action.payload);
    },
  },
});

export const { filterContacts } = filterSlice.actions;

export default filterSlice.reducer;
