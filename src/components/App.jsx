import { AppContainer } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 style={{ fontSize: '30px' }}>Contacts</h2>
      <Filter></Filter>
      <ContactList />
    </AppContainer>
  );
}
export default App;
