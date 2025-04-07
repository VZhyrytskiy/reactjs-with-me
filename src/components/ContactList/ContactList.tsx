import { Person } from "../../models"
import Contact from "../Contact/Contact";

interface ContactListProps {
    people: Person[],
    addNewContact: () => void;
}

function ContactList(props: ContactListProps) {
    const { people, addNewContact } = props;

    return (
        <>
            <button
                className="uppercase"
                onClick={addNewContact}>
                add contact
            </button>
            <div>
                {people.map((person, index) => {
                    return <Contact key={index} person={person} />
                })}
            </div>
        </>
    )
}

export default ContactList