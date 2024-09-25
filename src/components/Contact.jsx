const Contact = ({ contact, deleteFromList }) => {
  return (
    <div className="div-contact-info">
      <p className="p-contact">{contact.name}</p>  
      <p className="p-contact">{contact.phone}</p> 
      <button onClick={() => deleteFromList(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;