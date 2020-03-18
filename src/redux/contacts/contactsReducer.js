import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsAction from "./contactsActions";

const addContact = (state, action) => [...state, action.payload];
const removeContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);
const items = createReducer([], {
  [contactsAction.fetchContactSuccess]: (state, action) => action.payload,
  [contactsAction.addContactSuccess]: addContact,
  [contactsAction.removeContactSuccess]: removeContact
});

const filter = createReducer("", {
  [contactsAction.changeFilter]: (state, action) => action.payload
});

const loading = createReducer(false, {
  [contactsAction.fetchContactRequest]: () => true,
  [contactsAction.addContactRequest]: () => true,
  [contactsAction.removeContactRequest]: () => true,

  [contactsAction.addContactSuccess]: () => false,
  [contactsAction.fetchContactSuccess]: () => false,
  [contactsAction.removeContactSuccess]: () => false,

  [contactsAction.addContactError]: () => false,
  [contactsAction.fetchContactError]: () => false,
  [contactsAction.removeContactError]: () => false
});

export default combineReducers({
  items,
  filter,
  loading
});
