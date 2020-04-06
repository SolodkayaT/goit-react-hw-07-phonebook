import contactsActions from "./contactsActions";
import axios from "axios";
axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiNDZlNmMzNWY3ODAwMTc4ZDI0MDYiLCJpYXQiOjE1ODYxODU5NTh9.bOcrq6tidpidkBygmcJo9ENxVQzWGJY7WI18mvuW8Pc";
axios.defaults.headers.post["Content-Type"] = "application/json";

const addContact = (name, number) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post("/contacts", { name, number })
    .then(({ data }) => {
      dispatch(contactsActions.addContactSuccess(data));
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactSuccess(data)))
    .catch((error) => contactsActions.fetchContactError(error));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.fetchContactError(error)));
};

export default { addContact, fetchContacts, removeContact };
