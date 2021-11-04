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

  handleAddContact = () => {
    console.log("click");

    this.state.contacts.push({
      key: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    });

    this.setState({ name: "" });
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
          handlePhoneChange={this.handlePhoneChange}
          handleAddContact={this.handleAddContact}
        />

        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />

        <ContactList
          contacts={this.state.contacts}
          key={this.state.contacts.key}
          state={this.state}
        />
      </div>
    );
  }
}

export default App;
