import Filter from './Filter';
import Contact from './Contact';

import { getItems, getFilter } from '../redux/selectors';

import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);

  const filterVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase().trim();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };

  const filteredContacts = filterVisibleContacts(contacts).reverse();

  return (
    <div>
      <Filter />
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
}
