import { useDispatch, useSelector } from 'react-redux';
import { AppContainer } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getContactIsLoading, getContactError } from '../redux/selectors';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getContactIsLoading);
  const error = useSelector(getContactError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 style={{ fontSize: '30px' }}>Contacts</h2>
      <Filter></Filter>
      {isLoading && !error && <p>Loading contacts...</p>}
      {!isLoading && error && (
        <p>We are sorry, something go wrong. Error message: "{error}"</p>
      )}
      {!isLoading && !error && <ContactList />}
    </AppContainer>
  );
}
export default App;
