import { Person } from "../../models"
import Contact from "../Contact/Contact";

interface ContactListProps {
    people: Person[]
}

function ContactList(props: ContactListProps) {
    const { people } = props;

    return (
        <div>
            {people.map((person, index) => {
                return <Contact key={index} person={person} />
            })}
        </div>
    )
}

export default ContactList