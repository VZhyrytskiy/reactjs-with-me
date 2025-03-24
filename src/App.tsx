import './App.css'
import ContactList from './components/ContactList/ContactList';
import { people } from './mockdata/person';


function App() {
  return (
    <>
       <ContactList people={people} />
    </>
  )
}

export default App;
