import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from './ContactItem.styled';
import { Button, Typography } from '@mui/material';
import { deleteContact } from '../redux/operations';
import { selectIsLoading } from '../redux/selectors';

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
