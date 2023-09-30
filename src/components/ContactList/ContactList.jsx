import { ContactItem } from 'components/ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <Contacts>
      {contacts.length > 0 &&
        contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </Contacts>
  );
};
