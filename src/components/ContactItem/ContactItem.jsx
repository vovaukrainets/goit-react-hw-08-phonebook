import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from './ContactItem.styled';

import { selectIsLoading } from '../redux/contacts/selectors';
import { deleteContact } from '../redux/contacts/operations';
import { Button, Typography } from '@mui/material';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  const isLoading = useSelector(selectIsLoading);

  return (
    <ContactListItem>
      <Typography marginRight={'auto'}>{name}:</Typography>
      <Typography>{number}</Typography>
      <Button
        variant="contained"
        onClick={onDeleteContact}
        disabled={isLoading}
      >
        Delete
      </Button>
    </ContactListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
