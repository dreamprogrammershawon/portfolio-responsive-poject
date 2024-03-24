import React, { useState } from 'react'
import './Contact.scss'

const Contact = () => {
const [message,setMessage]=useState(false)
const handleSubmit=(e)=>{
e.preventDefault()
setMessage(true)
}


  return (
    <div className='contact' id='contact'>
<div className="left">
  <img src="assets/shake.svg" alt="" />
</div>

<div className="right">
  <h2>Contact.</h2>
  <form action="" onSubmit={handleSubmit}>
    <input type="text"placeholder='Email' />
    <textarea placeholder='Message'></textarea>
    <button type='submit'>Send</button>
    {message && <span>Thanlks, I'll replay ASAP :)</span>}
  </form>
</div>
      
      </div>
  )
}

export default Contact