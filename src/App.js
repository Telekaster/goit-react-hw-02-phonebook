import React, { Component } from "react";
import InputContacts from "./components/inputContacts/InputContacts";
import shortid from "shortid";
import Contacts from "./components/contacts/Contacts";

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
      <>
        <InputContacts
          handleNameChange={this.handleNameChange}
          handleSaveContact={this.handleSaveContact}
          handlePhoneChange={this.handlePhoneChange}
        />
        <Contacts
          contacts={this.state.contacts}
          filterContacts={this.filterContacts}
          key={this.state.contacts.key}
          state={this.state}
        />
      </>
    );
  }
}

export default App;
