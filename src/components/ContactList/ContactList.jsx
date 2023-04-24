import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFiltredContacts = () => {
    const normalizedFilter = filter.value.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFiltredContacts();
  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone}></ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
