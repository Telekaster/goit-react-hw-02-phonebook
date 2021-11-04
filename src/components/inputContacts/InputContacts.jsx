import React, { Component } from "react";
import styles from "./InputContacts.css";

function InputContacts({
  handleNameChange,
  handleSaveContact,
  handlePhoneChange,
}) {
  return (
    <>
      <div className="input">
        <h2>Phonebook</h2>

        <div className="input__area">
          <p>Name</p>
          <input
            onChange={handleNameChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <p>phone</p>
          <input type="tel" onChange={handlePhoneChange} />

          <button
            type="button"
            className="input__btn"
            onClick={handleSaveContact}
          >
            Add contact
          </button>
        </div>
      </div>
    </>
  );
}

export default InputContacts;
