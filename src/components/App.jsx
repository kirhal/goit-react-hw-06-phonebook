import { useState, useEffect } from 'react';
import css from './App.module.css';

import Section from './section/Section';
import AddContacts from './phonebook/AddContacts';
import MapContacts from './contacts/RenderContacts';
import FilterContacts from './filter/FilterContacts';

export default function App() {
  const localContacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(localContacts);

  const [contacts, setContacts] = useState(
    parsedContacts ? parsedContacts : []
  ); // <= Прибрати

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFilterChange = evt => {
    const filterValue = evt.currentTarget.value.toLowerCase().trim();
    setFilter(filterValue);
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <AddContacts />
      </Section>
      <Section title="Contacts">
        {contacts.length !== 0 && (
          <>
            <FilterContacts changeFilter={onFilterChange} value={filter} />
            <MapContacts
            // filterContacts={filterContacts}   <= Прибрати
            />
          </>
        )}
      </Section>
    </div>
  );
}
