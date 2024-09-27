import { useSelector } from "react-redux";
import Contact from "./Contact";

const ContactList = ({deleteContact}) => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="contact-list-div">
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} deleteContact={deleteContact}/>
        ))
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default ContactList;
