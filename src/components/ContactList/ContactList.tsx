import { Person } from "../../models"
import Contact from "../Contact/Contact";

interface ContactListProps {
    people: Person[]
}

function ContactList(props: ContactListProps) {
    const { people } = props;

    const handleClick = () => {
        console.log('ContactList clicked (фаза сплиття)');
    };

    const handleClickCapture = (event) => {
        event.stopPropagation();
        console.log('ContactList clicked (фаза захоплення)');
    };

    return (
        <div 
            onClick={handleClick}
            onClickCapture={handleClickCapture}>
            {people.map((person, index) => {
                return <Contact key={index} person={person} />
            })}
        </div>
    )
}

export default ContactList