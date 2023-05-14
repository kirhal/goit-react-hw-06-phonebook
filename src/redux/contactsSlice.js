import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'Max Factor',
    number: '111-111-11',
    id: 1,
  },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
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
