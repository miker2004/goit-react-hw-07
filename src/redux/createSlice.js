import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
  contacts: {
    items: [], 
    isLoading: false, 
    error: null, 
  },
  filters: {
    name: ""
  }
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log('Contacts fetched:', action.payload); 
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        console.log('Updated state.items:', state.items); 
    })    
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false; 
        state.contacts.error = action.payload; 
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.isLoading = true; 
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false; 
        state.contacts.error = null; 
        state.contacts.items.push(action.payload); 
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false; 
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true; 
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false; 
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload 
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload; 
      });
  },
});

export default contactsSlice.reducer;
