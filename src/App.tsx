import { useState } from 'react';
import './App.css'
import ContactList from './components/ContactList/ContactList';
import { people } from './mockdata/person';
import { Person } from './models';
import LazyStateInit from './components/LazyStateInit/LazyStateInit';


function App() {
  const [contacts, setContacts] = useState<Person[]>(people);


  const changeContacts = () => {
    console.log('Change contacts button clicked!');
    const updatedContact = { ...contacts[0], name: 'New Name' };
    setContacts([updatedContact, ...contacts.slice(1)]); 
  }

  console.log('App component rendered!');

  return (
    <>
      {/* <button onClick={changeContacts}>Change Contacts</button>
      <ContactList people={contacts} /> */}
      <LazyStateInit />
    </>
  )
}

export default App;
