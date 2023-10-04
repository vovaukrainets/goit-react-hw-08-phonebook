import { Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../redux/contacts/operations';
import { selectContacts, selectIsLoading } from '../redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Typography variant="h3">Contacts</Typography>
      {contacts.length === 0 && !isLoading && <h2>You have no contacts</h2>}
      {contacts.length > 0 && <Filter />}
      <ContactList />
    </>
  );
};

export default Contacts;
