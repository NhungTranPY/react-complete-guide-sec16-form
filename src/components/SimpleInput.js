import { useState } from "react";
import useInput from "../hooks/use-input";


const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsvalid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredEmailIsValid = enteredEmail.includes('@')
  const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false

  if (enteredNameIsvalid && enteredEmailIsValid) {
    formIsValid = true
  }

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value)
  }

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true)
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()
    if (!enteredNameIsvalid) {
      return
    }
    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput()
    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }

  const nameInputClasses = nameInputHasError 
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClasses = enteredEmailIsInValid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          value={enteredName} 
          onChange={nameChangeHandler} 
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          value={enteredEmail} 
          onChange={emailInputChangeHandler} 
          onBlur={emailInputBlurHandler}
        />
        {enteredEmailIsInValid && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
