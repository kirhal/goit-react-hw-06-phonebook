import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { data: [] },
  reducers: {
    pushContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { pushContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
