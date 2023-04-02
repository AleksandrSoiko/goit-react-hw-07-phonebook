import { ListContact } from './ListContacts/ListContacts';
import { Layout } from './Layout/Layout.styled';
import { ContactForm } from './FormsAdd/FormsAdd';
import { Title } from './App.styled';
import { Filter } from './FilterContacts/FilterContacts';
import { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <Title>Phonebook</Title>
        <ContactForm></ContactForm>
        <Title>Contacts</Title>
        <Filter />
        <ListContact />
      </Layout>
    </PersistGate>
  );
};
