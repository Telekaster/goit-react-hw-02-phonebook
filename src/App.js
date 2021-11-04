import React, { Component } from "react";
import InputContacts from "./components/inputContacts/InputContacts";
import shortid from "shortid";
import Contacts from "./components/contacts/Contacts";

class App extends Component {
  state = {
    contacts: [],
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
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    });

    return this.setState({ contacts: contactsArr });
  };

  render() {
    return (
      <>
        <InputContacts
          handleNameChange={this.handleNameChange}
          handleSaveContact={this.handleSaveContact}
          handlePhoneChange={this.handlePhoneChange}
        />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
