import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import ContactListItem from "../ContactListItem/ContactListItem";

function ContactList({ contacts, isLoadingContacts }) {
  return (
    <>
      {isLoadingContacts && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      <ul>
        {contacts.map(({ id }) => (
          <ContactListItem key={id} id={id} />
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
