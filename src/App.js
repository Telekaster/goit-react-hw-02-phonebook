import React, { Component } from "react";
import InputContacts from "./components/inputContacts/InputContacts";
import shortid from "shortid";
import Contacts from "./components/contacts/Contacts";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleNameChange = (evt) => {
    return this.setState({ name: evt.target.value });
  };

  handleSaveContact = (evt) => {
    const contactsArr = this.state.contacts;
    contactsArr.push({
      name: this.state.name,
      id: shortid.generate(),
    });
    return this.setState({ contacts: contactsArr });
  };

  render() {
    return (
      <>
        <InputContacts
          handleNameChange={this.handleNameChange}
          handleSaveContact={this.handleSaveContact}
        />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
