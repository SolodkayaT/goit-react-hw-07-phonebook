import contactsActions from "./contactsActions";
const baseURL = "https://goit-phonebook-api.herokuapp.com/v1";
//"1474f3f5-f023-4759-aec0-68582b03d82b"

const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactRequest());
  const contact = { name, number };
  fetch(`${baseURL}/contacts`, {
    method: "POST",
    headers: {
      Authorization: "1474f3f5-f023-4759-aec0-68582b03d82b",
      "content-type": "application/json"
    },
    body: JSON.stringify(contact)
  })
    .then(data => data.json())
    .then(data => {
      dispatch(contactsActions.addContactSuccess(data));
    })
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactRequest());
  fetch(`${baseURL}/contacts`, {
    method: "GET",
    headers: { Authorization: "1474f3f5-f023-4759-aec0-68582b03d82b" }
  })
    .then(data => data.json())
    .then(data => dispatch(contactsActions.fetchContactSuccess(data)))
    .catch(error => contactsActions.fetchContactError(error));
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());
  fetch(`${baseURL}/contacts/${id}`, {
    method: "DELETE",
    headers: { Authorization: "1474f3f5-f023-4759-aec0-68582b03d82b" }
  })
    .then(result => result.json())
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch(error => dispatch(contactsActions.fetchContactError(error)));
};

export default { addContact, fetchContacts, removeContact };
