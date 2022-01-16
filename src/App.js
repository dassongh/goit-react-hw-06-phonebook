import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList';

import s from './App.module.css';

function App() {
  return (
    <div className={s.container}>
      <h2>Phonebook</h2>

      <ContactForm />

      <h2>Contacts</h2>

      <ContactList />
    </div>
  );
}

export default App;
