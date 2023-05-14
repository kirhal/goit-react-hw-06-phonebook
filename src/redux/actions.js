// import { nanoid } from 'nanoid';

import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/AddContact', text => {
  return {
    payload: {
      name: text.name,
      number: text.number,
      id: nanoid(),
    },
  };
});
export const deleteContact = createAction('contacts/DeleteContact', text => {
  return {
    payload: text,
  };
});
export const filterContacts = createAction('filters/FilterContacts');

// console.log(deleteContact('1'));
