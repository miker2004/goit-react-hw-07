import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm";
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import { addContact, deleteContact, fetchContacts } from './redux/operations';
import './App.css';
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)); 
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox />
      <ContactList contacts={contacts} deleteContact={handleDeleteContact} /> {/* Pass deleteContact to ContactList */}
    </div>
  );
};

export default App;
