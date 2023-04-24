import { CommonButton } from 'components/common/CommonButton.styled';
import { ContactLi, ContactInfo } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <ContactLi>
      <ContactInfo>{`${name}:`}</ContactInfo>
      <ContactInfo>{number}</ContactInfo>
      <CommonButton type="button" onClick={onDelete}>
        DELETE
      </CommonButton>
    </ContactLi>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactItem;
