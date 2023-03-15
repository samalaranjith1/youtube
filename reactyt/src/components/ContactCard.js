import React from 'react'

function ContactCard(props) {
  const contact = props.contact;
  return (<div>
    <div className='clMainContainer'>
      <div className='clContainer clRow'>
        <div className='clName'>{contact.name}</div>
        <div className='clEmail'>{contact.email}</div>
      </div>
      <div>
      <div className='clButtonContainer clRow'>
          <button className='clEdit'>Edit</button>
        </div>
        <div className='clButtonContainer clRow'>
          <button className='clDelete'
          onClick={()=>props.clickHandler(props.contact.id)}>Delete</button>
        </div>
      </div>
      

    </div>
    <br />
  </div>)
}

export default ContactCard