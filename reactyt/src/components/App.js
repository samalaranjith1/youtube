import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import {BrowserRouter as Router ,Routes,Switch,Route} from 'react-router-dom'

function App() {

  const LOCAL_STORAGE_KEY='contact'

  const [contact,setContact]=useState([])
  const addContactHandler=(contact)=>{
    setContact((pd)=>[...pd,{id:Date.now(),...contact}]);
  }
  useEffect(()=>{
    const data = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
    if(data) setContact(data)
    
  },[])
  useEffect(()=>{
    window.localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contact));
  },[contact]);

  const removeContactHandler=(id)=>{
    const newContact=contact.filter((contact)=>{
      return contact.id!==id
    });
    setContact(newContact);

  }
 

  return (
    <div className="App">
      
        <Header />
        <ContactList contact={contact} 
          getElementId={removeContactHandler} />
          <AddContact addContactHandler={addContactHandler} />
    
    </div>
  );
}

export default App;
