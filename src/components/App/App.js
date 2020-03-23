import React, { Component } from "react";
import { connect } from "react-redux";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import Layout from "../Layout/Layout";
import styles from "./App.module.css";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    return (
      <Layout>
        <section className={styles.section}>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={styles.title}>Contacts</h2>
          {this.props.contacts.length > 1 && <Filter />}
          <ContactList />
        </section>
      </Layout>
    );
  }
}
const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts
};

const mapStateToProps = state => {
  return { contacts: contactsSelectors.getContacts(state) };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
