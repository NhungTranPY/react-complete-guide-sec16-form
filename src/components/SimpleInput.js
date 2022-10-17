import { useState } from "react";


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredNameIsvalid = enteredName.trim() !== ''
  const nameInputIsInValid = !enteredNameIsvalid && enteredNameTouched

  const enteredEmailIsValid = enteredEmail.includes('@')
  const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false

  if (enteredNameIsvalid && enteredEmailIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value)
  }

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true)
  }

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true)
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()
    setEnteredNameTouched(true)
    if (!enteredNameIsvalid) {
      return
    }
    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName('')
    setEnteredNameTouched(false)
    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }

  const nameInputClasses = nameInputIsInValid 
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
          onChange={nameInputChangeHandler} 
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInValid && <p className="error-text">Name must not be empty</p>}
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
