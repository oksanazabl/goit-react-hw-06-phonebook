import css from './PhonebookContatcs.module.css';
import { useCallback } from 'react';

const PhonebookContacts = ({ contacts, onDeleteContact }) => {


  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          {name}: {number}
          <button
            className={css.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhonebookContacts;
