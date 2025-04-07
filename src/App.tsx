import { useState } from 'react';
import './App.css'
import ContactList from './components/ContactList/ContactList';
import { people } from './mockdata/person';
import { Person } from './models';

function App() {
  const [contacts, setContacts] = useState(people);

  console.log('App component rendered!');

  const addNewContact = () => {
    const newContact: Person = {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john@example.com',
      isAvailable: true,
      age: 30,
    };

    setContacts([newContact, ...contacts]);

    console.log('addNewContact function called!');
  }

  return (
    <>
      <ContactList people={contacts} addNewContact={addNewContact} /> 
    </>
  )
}

export default App;
