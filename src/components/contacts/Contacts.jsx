import React from "react";
import styles from "./Contact.css";

function Contacts({ contacts, filterContacts, state }) {
  console.log(state.filter.length);
  return (
    <div className="contacts">
      <h2>Contacts</h2>

      <p>Find contacts by name</p>
      <input type="text" onChange={filterContacts} />

      <ul className="contacts__list">
        {state.filter.length === 0
          ? contacts.map((item) => {
              return <li key={item.key}>{`${item.name}: ${item.number}`}</li>;
            })
          : contacts
              .filter((item) => item.name.includes(state.filter))
              .map((item) => {
                return <li key={item.key}>{`${item.name}: ${item.number}`}</li>;
              })}
      </ul>
    </div>
  );
}

export default Contacts;
