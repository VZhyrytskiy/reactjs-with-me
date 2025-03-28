import { Person } from '../../models';

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
  const { name = 'Vitaliy', phone, email, isAvailable = false, age } = props.person ?? defaultPerson;

  const handleClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    // event.stopPropagation();
    console.log('Contact clicked (фаза сплиття)');
  };

  const handleClickCapture = (event: React.MouseEvent<HTMLParagraphElement>) => {
    // event.stopPropagation();
    console.log('Contact clicked (фаза захоплення)');
  };
  return (
    <>
      <h2>Contact</h2>
      <section>
        <p
          onClick={handleClick}
          onClickCapture={handleClickCapture}>
            <span className='font-bold'>Name:</span> 
            <span className='text-blue-800 ml-4'>{name}</span>
        </p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>isAvailable: {isAvailable.toString()}</p>
        <p>Age: {age}</p>
      </section>
    </>
  )
}

export default Contact;