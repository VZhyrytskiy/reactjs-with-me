import './App.css'
import ContactList from './components/ContactList/ContactList';
import { people } from './mockdata/person';

function App() {
  console.log('App component rendered!');

  return (
    <>
      <ContactList people={people} /> 
    </>
  )
}

export default App;
