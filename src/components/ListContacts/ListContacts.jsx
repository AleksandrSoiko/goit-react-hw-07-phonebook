import { List, Error, Loading } from './ListContacts.styled';
import { ContactItem } from 'components/ItemContact/ItemContact';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  getContacts,
  getError,
  getFilter,
  getStatus,
  getVisibleContact,
} from 'redux/selectors';

export const ListContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContact = getVisibleContact(contacts, filter);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error !== null && <Error>`${error}`</Error>}
      {status && <Loading>Request is loading...</Loading>}

      {contacts.length !== 0 && (
        <List>
          {visibleContact.map(contact => {
            return (
              <ContactItem
                key={contact.id}
                name={contact.name}
                contact={contact.phone}
                onDelete={() => {
                  dispatch(deleteContact(contact.id));
                }}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
