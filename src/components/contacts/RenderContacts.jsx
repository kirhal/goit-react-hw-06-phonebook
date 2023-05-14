import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import css from './Contacts.module.css';

export default function MapContacts() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const removeContact = evt => {
    const contactId = evt.currentTarget.id;
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css['contacts-list']}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css['contacts-list__item']}>
            <span className={css['contacts-list__data']}>
              {name}: {number}
              <button
                type="button"
                className={css['contacts-list__button']}
                id={id}
                onClick={removeContact}
              >
                Delete
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

//