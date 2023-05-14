import { addContact, deleteContact, filterContacts } from './actions';
import { createReducer } from '@reduxjs/toolkit';

// 0 - початковий стан
// const contactsInitialState = [{ id: 1, name: 'boo', number: '123-23-33' }];

export const contactsReducer = createReducer(1, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    // const index = state.findIndex(({ id }) => id === action.payload);
    // state.splice(index, 1);
    state.filter(({ id }) => id !== action.payload);
  },
  // FILTER????
  // [filterContacts]: (state, action) => {
  //   state.filter(({ name }) =>
  //     name.toLowerCase().includes(action.payload.name)
  //   );
  // },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [filterContacts]: (state, action) => {
    state.filter(({ name }) =>
      name.toLowerCase().includes(action.payload.name)
    );
  },
});
