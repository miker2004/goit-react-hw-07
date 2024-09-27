import { deleteContact } from "../redux/operations";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className="div-contact-info">
      <p className="p-contact">{contact.name}</p>  
      <p className="p-contact">{contact.number}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};


export default Contact;