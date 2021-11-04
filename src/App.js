import React, { Component } from "react";
import shortid from "shortid";
import styles from "./index.css";
import ContactForm from "./components/ContactForm/ContactForm ";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  handleNameChange = (evt) => {
    return this.setState({ name: evt.target.value });
  };

  handlePhoneChange = (evt) => {
    return this.setState({ number: evt.target.value });
  };

  handleSaveContact = (evt) => {
    const contactsArr = this.state.contacts;
    contactsArr.push({
      key: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    });

    return this.setState({ contacts: contactsArr });
  };

  filterContacts = (evt) => {
    return this.setState({ filter: evt.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm
          handleNameChange={this.handleNameChange}
          handleSaveContact={this.handleSaveContact}
          handlePhoneChange={this.handlePhoneChange}
        />

        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />

        <ContactList
          contacts={this.state.contacts}
          filterContacts={this.filterContacts}
          key={this.state.contacts.key}
          state={this.state}
        />
      </div>
    );
  }
}

export default App;
