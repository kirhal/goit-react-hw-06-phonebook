// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import css from './App.module.css';

import Section from './section/Section';
import AddContacts from './phonebook/AddContacts';
import MapContacts from './contacts/RenderContacts';
import FilterContacts from './filter/FilterContacts';

export default function App() {
  const contacts = useSelector(state => state.contacts.data);
  console.log(contacts);
  // const localContacts = localStorage.getItem('contacts');

  // const [contacts, setContacts] = useState(
  //   parsedContacts ? parsedContacts : []
  // ); // <= Прибрати

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <AddContacts />
      </Section>
      <Section title="Contacts">
        {contacts.length !== 0 && (
          <>
            <FilterContacts />
            <MapContacts />
          </>
        )}
      </Section>
    </div>
  );
}
