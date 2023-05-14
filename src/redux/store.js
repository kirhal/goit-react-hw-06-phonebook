import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filterReducer } from './reducer';
import { contactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    contacts: contactsSlice.reducer,
    // filter: filterReducer,
  },
});
