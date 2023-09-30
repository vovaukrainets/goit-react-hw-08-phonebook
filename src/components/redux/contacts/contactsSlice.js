import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';
import {
  handleAddContact,
  handleDeleteContact,
  handleFetchContacts,
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../handles';
import { actionStatus } from '../contacts/constants';
import { contactsInitialState } from '../contacts/contactsInitialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(
        action => action.type.endsWith(actionStatus.pending),
        handlePending
      )
      .addMatcher(
        action => action.type.endsWith(actionStatus.fulfilled),
        handleFulfilled
      )
      .addMatcher(
        action => action.type.endsWith(actionStatus.rejected),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
