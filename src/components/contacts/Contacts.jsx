import React from "react";
import styles from "./Contact.css";

function Contacts({ contacts }) {
  return (
    <div className="contacts">
      <h2>Contacts</h2>

      <ul className="contacts__list">
        {contacts.map((item) => {
          return <li>{`${item.name}: ${item.number}`}</li>;
        })}
      </ul>
    </div>
  );
}

export default Contacts;
