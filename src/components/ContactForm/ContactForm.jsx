import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Form } from './ContactForm.styled';
import { CommonButton } from 'components/common/CommonButton.styled';
import { FormInput } from 'components/common/FormInput.styled';
import { FormLabel } from 'components/common/FormLabel.styled';

function ContactForm() {
  const dispatch = useDispatch();
  const formSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const nameValue = form.name.value;
    const numberValue = form.number.value;
    dispatch(addContact(nameValue, numberValue));
    form.reset();
  };
  return (
    <Form onSubmit={formSubmit}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput
        type="text"
        name="name"
        placeholder="Enter Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <FormLabel htmlFor="number">Number</FormLabel>
      <FormInput
        type="tel"
        name="number"
        placeholder="Enter phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <CommonButton type="submit">Add contact</CommonButton>
    </Form>
  );
}

export default ContactForm;
