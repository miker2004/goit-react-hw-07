import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm";
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import { addContact, deleteContact } from './redux/contact';
import { fetchContacts } from "./redux/operations";
import './App.css';
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact)); 
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox />
      <ContactList 
        contacts={contacts}
        deleteFromList={(contactToDelete) => dispatch(deleteContact(contactToDelete.id))} 
      />
    </div>
  );
}

export default App;
