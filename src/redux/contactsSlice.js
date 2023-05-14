import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'AAA AAA',
    number: '111-111-11',
    id: 123,
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

// Action creators are generated for each case reducer function
export const { pushContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

console.log('slice', contactsSlice);
