import { nanoid } from 'nanoid';
import { List } from './ListContacts.styled';
import { ContactItem } from 'components/ItemContact/ItemContact';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';

export const ListContact = () => {
  const contacts = useSelector(state => state.contacts.phones);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const visibleContact = [...contacts].filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <List>
      {visibleContact.map(contact => {
        return (
          <ContactItem
            key={nanoid()}
            name={contact.name}
            contact={contact.number}
            onDelete={() => {
              dispatch(deleteContact(contact.id));
            }}
          />
        );
      })}
    </List>
  );
};
