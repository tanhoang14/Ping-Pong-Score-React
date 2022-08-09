import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import Game from './Game/Game';
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  function submitForm() {
    setIsSubmitted(true);
  }

    
  return (
   
    <>
    <div className='form-container'>
     
     
      {!isSubmitted ? (
          <FormSignup submitForm={submitForm}/>
        ) : (
          <Game />
          )}
      
    </div>
  </>
  )
}

export default Form
