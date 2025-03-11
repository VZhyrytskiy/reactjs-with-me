import { Person } from '../models';

type ContactProps = {
  person?: Person;
};

const defaultPerson: Person = {
  name: "Vitaliy",
  phone: "+38 067 000 00 00",
  email: "v.zhiritskiy@gmail.com",
  isAvailable: true,
  age: 30
};


const Contact: React.FC<ContactProps> = (props) => {
  console.log(props);
  const { name = 'Vitaliy', phone, email, isAvailable = false, age } = props.person ?? defaultPerson;
  return (
    <>
        <h2>Contact</h2>
        <section>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>isAvailable: {isAvailable.toString()}</p>
            <p>Age: {age}</p>
        </section>
    </>
  )
}

export default Contact;