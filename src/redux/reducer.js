import { addContact, deleteContact, filterContacts } from './actions';

const contactsInitialState = [];

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case addContact.type:
      return [...state, action.payload];
    case deleteContact.type:
      return state.filter(task => task.id !== action.payload);
    case filterContacts.type:
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};
export const filtersReducer = (state = 0, action) => {
  // Reducer code
};
