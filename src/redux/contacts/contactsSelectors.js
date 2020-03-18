const getContacts = state => state.contacts.items;
const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getVisibleContacts = state => {
  const items = getContacts(state);
  const filter = getFilter(state).toLowerCase();
  return items.filter(contact => contact.name.toLowerCase().includes(filter));
};

const getContactById = (state, contactId) => {
  const items = getContacts(state);
  return items.find(item => item.id === contactId);
};
export default {
  getLoading,
  getVisibleContacts,
  getFilter,
  getContactById
};
