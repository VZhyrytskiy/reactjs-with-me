import './App.css'
import Contact from './components/Contact';
import { people } from './mockdata/person';


function App() {
  return (
    <>
        {people.map((person, index) => {
          return <Contact key={index} person={person} />
        })}
    </>
  )
}

export default App;
