import './App.css'
import Contact from './components/Contact'
import { Person } from './models';

function App() {
  const person: Person = {
    name: "Vitaliy",
    phone: "+38 067 000 00 00",
    email: "v.zhiritskiy@gmail.com",
    isAvailable: true,
    age: 30
  };

  return (
    <>
      <Contact person={person} />
    </>
  )
}

export default App;
