import contactsActions from "./contactsActions";
import axios from "axios";
axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/v1";
axios.defaults.headers.common["Authorization"] =
  "1474f3f5-f023-4759-aec0-68582b03d82b";
axios.defaults.headers.post["Content-Type"] = "application/json";

const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactRequest());
  const contact = { name, number };
  axios
    .post("/contacts", { name, number }, { body: JSON.stringify(contact) })
    .then(({ data }) => {
      dispatch(contactsActions.addContactSuccess(data));
    })
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactSuccess(data)))
    .catch(error => contactsActions.fetchContactError(error));
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch(error => dispatch(contactsActions.fetchContactError(error)));
};

export default { addContact, fetchContacts, removeContact };
