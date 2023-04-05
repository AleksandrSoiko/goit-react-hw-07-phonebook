import { ListContact } from './ListContacts/ListContacts';
import { Layout } from './Layout/Layout.styled';
import { ContactForm } from './FormsAdd/FormsAdd';
import { Title } from './App.styled';
import { Filter } from './FilterContacts/FilterContacts';

export const App = () => {
  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm></ContactForm>
      <Title>Contacts</Title>
      <Filter />
      <ListContact />
    </Layout>
  );
};
