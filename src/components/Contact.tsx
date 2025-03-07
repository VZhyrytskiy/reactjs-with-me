// interface ContactProps {
//     name: string;
//     phone: string;
//     email: string;
// }

type ContactProps = {
  name: string;
  phone: string;
  email: string;
};


const Contact: React.FC<ContactProps> = (props) => {
  console.log(props);  
  return (
    <>
        <h2>Contact</h2>
        <section>
            <p>Name: {props.name}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </section>
    </>
  )
}

export default Contact;