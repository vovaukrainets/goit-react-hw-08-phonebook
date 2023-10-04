import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from '../redux/contacts/selectors';
import { addContact } from '../redux/contacts/operations';
import { Button, FormGroup, TextField } from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn(`There is no input: ${name}!`);
    }
  };

  const checkInContacts = name =>
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

  const createContact = data => {
    const { name } = data;
    if (checkInContacts(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(data));
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup
        sx={{
          display: 'inline-flex',
          gap: 1,
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 320,
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </FormGroup>
    </form>
  );
};
