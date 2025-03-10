// interface ContactProps {
//     name: string;
//     phone: string;
//     email: string;
// }

type Person = {
  name: string;
  phone: string;
  email: string;
  isAvailable: boolean;
  age: number;
};

type ContactProps = {
  person: Person;
};


const Contact: React.FC<ContactProps> = (props) => {
  console.log(props);
  const { name, phone, email, isAvailable, age } = props.person;  
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