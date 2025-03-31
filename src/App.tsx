import './App.css'
import ContactList from './components/ContactList/ContactList';
import { people } from './mockdata/person';


function App() {
  const changeContacts = () => {
    console.log('Change contacts button clicked!');
    people[0].name = 'New Name'; // This will not trigger a re-render
  }

  console.log('App component rendered!');

  return (
    <>
      <button onClick={changeContacts}>Change Contacts</button>
      <ContactList people={people} />
    </>
  )
}

export default App;
