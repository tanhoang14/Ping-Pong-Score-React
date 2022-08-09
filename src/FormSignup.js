import React, { useEffect, useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
const FormSignUp = function FormSignup({submitForm}) {
  
  const {handleChange, handleSubmit, values, errors} = useForm(submitForm, validate);

  const handleServe = (event) =>{
      localStorage.setItem("serve", event.target.value);
  }
  useEffect (()=>{
    localStorage.setItem("Player 1", values.username);
    localStorage.setItem("Player 2", values.username2);

  },[values])

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Let's the game begin
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Player 1</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder="Enter Player 1 's Name"
            value={values.username1}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Player 2</label>
          <input
            className='form-input'
            type='text'
            name='username2'
            placeholder="Enter Player 2 's Name"
            value={values.username2}
            onChange={handleChange}
          />
        </div>

        <h3> Select player who serves</h3>

      <div className='radio-container'>
        <input type="radio" id="Player 1" name="Player" value="Player 1" onChange={handleServe}/>
        <label for="Player 1" style= {{ color:"white"}}>Player 1</label>
      </div>

    <div>
      <input type="radio" id="Player 2" name="Player" value="Player 2" onChange={handleServe}/>
      <label for="Player 2" style= {{ color:"white"}}>Player 2</label>
    </div>

    
        {/* <select name="Player" id="Player" defaultValue={"Player 1"} onChange={handleServe}>
            <option value="Player 1">Player 1</option>
            <option value="Player 2">Player 2</option>
        
      </select> */}
      
        <button className='form-input-btn' type='submit'>
          Start
        </button>
        
      </form>
    </div>
  )
}

export default FormSignUp
