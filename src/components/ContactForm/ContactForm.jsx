import { addContact } from '../../redux/actions';
import { getItems } from '../../redux/selectors';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const inputHandler = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name === name)) return alert(`${name} is already in contacts`);

    dispatch(addContact(name, number));

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <label className={s.label}>
        <span className={s.name}>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={inputHandler}
          required
        />
      </label>
      <label className={s.label}>
        <span className={s.name}>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={inputHandler}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
