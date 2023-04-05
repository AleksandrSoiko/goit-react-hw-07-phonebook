export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getVisibleContact = (contacts, filter) =>
  contacts.filter(contact => contact.name.toLowerCase().includes(filter));

export const getError = state => state.contacts.error;

export const getStatus = state => state.contacts.isLoading;
