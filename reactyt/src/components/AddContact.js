import React, { useState } from 'react'

function AddContact(props) {

  const [input ,setInput]=useState({
    name:'',
    email:''
  });
  const save=(e)=>{
    e.preventDefault();
    if(input.name===''|| input.email===''){
      alert("All fields are mandatory , please enter all the values...")
    }else
    {
      
  props.addContactHandler(input);
  setInput({
    name:'',
    email:''
  })
    }
  }
 
  return (
    <div className='acMainDiv'>
        <h2 className='acTitle'>Add Contact</h2>
        <form className='acForm' onSubmit={save}>
            <div className='acInputDiv'>
                <label htmlFor='fullName' className='label'>Name
                <input className='inputField'
                 type='text'
                name='fullName'
                placeholder='Name'
                value={input.name}
                onChange={(e)=>setInput((pd)=>({...pd ,name : e.target.value})
                )}
                />
                 </label>
            </div>
            <div className='acInputDiv'>
                <label htmlFor='fullName' className='label'>Email
                <input  className='inputField'
                type='text'
                name='email'
                placeholder='example@gmail.com'
                value={input.email}
                onChange={(e)=>setInput((pd)=>({...pd ,email : e.target.value})
                  )}
                />
                 </label>
            </div>
            <div className='divButton'>
            <button className='primaryButton'>
                Add
            </button>
            </div>
            
        </form>
    </div>
  )
}

export default AddContact