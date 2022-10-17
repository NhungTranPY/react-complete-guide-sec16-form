import { useState, useEffect } from "react";


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  const enteredNameIsvalid = enteredName.trim() !== ''
  const nameInputIsInValid = !enteredNameIsvalid && enteredNameTouched

  useEffect(() => {
    if (enteredNameIsvalid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [enteredNameIsvalid])

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true)
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()
    setEnteredNameTouched(true)
    if (!enteredNameIsvalid) {
      return
    }
    console.log(enteredName);
    setEnteredName('')
    setEnteredNameTouched(false)
  }

  const nameInputClasses = nameInputIsInValid 
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
