import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm";
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import { addContact, deleteContact } from './redux/contact';
import { fetchContacts } from "./redux/operations";
import './App.css';
import { useEffect } from "react";
import store from "./redux/store";

function App() {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  console.log('Redux state contacts:', contacts);
  
  useEffect(() => {
    console.log("Fetching contacts...");
    dispatch(fetchContacts()).then(() => {
      console.log('State after fetching contacts:', store.getState()); 
    });
  }, [dispatch]);
  

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact)); 
  };

  console.log(contacts);


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
