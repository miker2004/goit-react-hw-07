import Contact from "./Contact";


const ContactList = ({ contacts = [], deleteFromList }) => {
  console.log('Contacts in ContactList:', contacts); // Logowana lista kontaktów

  return (
    <div className="contact-list-div">
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} deleteFromList={deleteFromList} />
        ))
      ) : (
        <p>No contacts available.</p>  
      )}
    </div>
  ); 
};


export default ContactList;
