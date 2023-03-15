import React from 'react'
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom'

function ContactList(props) {

  const deleteContactHandler=(id)=>{
    props.getElementId(id);
  }
  const contact =props.contact.map((contact)=>{
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} key={props.contact.id}/>
    )
  })
  return (<div className='clContainer'>
    
    <div>
      {contact}
      </div>
  </div>
  )
}

export default ContactList