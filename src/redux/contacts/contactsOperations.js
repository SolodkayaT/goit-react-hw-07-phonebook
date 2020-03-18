import contactsActions from "./contactsActions";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:2000";

const addContact = (name, phone) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", { name, phone })
    .then(response => {
      console.log(response);
      dispatch(contactsActions.addContactSuccess(response.data));
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
