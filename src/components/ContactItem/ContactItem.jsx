import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from './ContactItem.styled';
import { Button } from 'components/Commons/Button.styled';
import { deleteContact } from '../redux/operations';
import { selectIsLoading } from '../redux/selectors';

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  const isLoading = useSelector(selectIsLoading);

  return (
    <ContactListItem>
      <p>
        {name}: {phone}
      </p>
      <Button onClick={onDeleteContact} disabled={isLoading}>
        Delete
      </Button>
    </ContactListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
