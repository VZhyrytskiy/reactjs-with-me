import './App.css'
import Contact from './components/Contact';
import WithSpinner from './hoc/WithSpinner';
import Image from './components/Image/Image';
import { person } from './mockdata/person';

const ContactWithSpinner = WithSpinner(Contact);

function App() {
  const isLoading = false;

  return (
    <>
      <ContactWithSpinner isLoading={isLoading} person={person} />  
      <Image />  
    </>
  )
}

export default App;
