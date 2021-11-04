import React from "react";
import styles from "./ContactList.css";

function ContactList({ contacts, state }) {
  return (
    <div className="contacts">
      <ul className="contacts__list">
        {state.filter.length === 0
          ? contacts.map((item) => {
              return <li key={item.key}>{`${item.name}: ${item.number}`}</li>;
            })
          : contacts
              .filter((item) =>
                item.name.toLowerCase().includes(state.filter.toLowerCase())
              )
              .map((item) => {
                return <li key={item.key}>{`${item.name}: ${item.number}`}</li>;
              })}
      </ul>
    </div>
  );
}

export default ContactList;
