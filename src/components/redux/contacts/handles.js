export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFetchContacts = (state, { payload }) => {
  state.items = payload;
};

export const handleAddContact = (state, { payload }) => {
  state.items.unshift(payload);
};

export const handleDeleteContact = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};
