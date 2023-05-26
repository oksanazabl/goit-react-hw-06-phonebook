import React from 'react';

import { useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';


import Container from './Container';
import PhonebookForm from './PhonebookForm';
import PhonebookContacts from './PhonebookContatcs';
import PhonebookFilter from './PhonebookFilter';
// import filterContacts from '../utils/filterContacts';

const App = () => {
   const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  return (
     <PersistGate loading={null} persistor={persistor}>
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm />

      <h2>Contacts</h2>
      <PhonebookFilter />
       <PhonebookContacts contacts={contacts} />
    </Container>
      </PersistGate>
  );
};

export default App;
