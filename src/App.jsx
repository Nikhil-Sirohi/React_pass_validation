import { useState } from 'react';
import './App.css'
import validator from 'validator';

export default function App() {

  const[ErrorMessage, setErrorMessage]= useState('');

  function validateThePassword(value){
    if(validator.isStrongPassword(value,{
      minLength:8 , minLowercase:1, minUppercase:1 , 
      minNumbers:1, minSymbols:1
    })){
      setErrorMessage('Is Strong Password')
    }
    else{
      setErrorMessage('Not Strong Password')
    }

  
  }


  function handleInputChange(event){
    validateThePassword(event.target.value);
  }

  let finalerror;
  if(ErrorMessage===''){
    finalerror=null;
  }
  else{
    finalerror=ErrorMessage;
  }

  
  return (
    <div>
      <h2>Checking password Strength in ReactJS</h2>
      <span>Enter Password : </span>
      <input type= "text" onChange={handleInputChange}></input>
      {finalerror}
    </div>
  )
}
