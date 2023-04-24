import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

// addContact: {
//   reducer(state, action) {
//     const stateContacts = state.contacts.items;
//     const chekClone = stateContacts.find(
//       item =>
//         item.name === action.payload.name ||
//         item.number === action.payload.number
//     );
//     if (chekClone) {
//       alert(
//         `User with name ${action.payload.name} or number ${action.payload.number} is already in contacts`
//       );
//       return state;
//     }
//     stateContacts.push(action.payload);
//   },
//   prepare(name, number) {
//     return {
//       payload: {
//         id: nanoid(),
//         name,
//         number,
//       },
//     };
//   },
// },
// deleteContact(state, action) {
//   const stateContacts = state.contacts.items;
//   const index = stateContacts.findIndex(
//     contact => contact.id === action.payload
//   );
//   stateContacts.splice(index, 1);
// },
