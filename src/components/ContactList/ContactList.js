import React from "react";
import { connect } from "react-redux";
import { uuid } from "uuidv4";
import PropTypes from "prop-types";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import ContactListItem from "../ContactListItem/ContactListItem";

function ContactList({ contacts, isLoadingContacts }) {
  return (
    <>
      {isLoadingContacts && <p>Lading contacts...</p>}
      <ul>
        {contacts.map(({ id }) => (
          <ContactListItem key={uuid()} id={id} />
        ))}
      </ul>
    </>
  );
}

ContactList.defaultProps = {
  contacts: []
};

ContactList.propTypes = {
  contacts: PropTypes.array
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
    isLoadingContacts: contactsSelectors.getLoading(state)
  };
};

export default connect(mapStateToProps)(ContactList);
