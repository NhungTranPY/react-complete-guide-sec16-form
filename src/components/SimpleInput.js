import { useState } from "react";


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsvalid, setEnteredNameIsvalid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
    if (e.target.value.trim() !== '') {
      setEnteredNameIsvalid(true)
    }
  }

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true)
    if (enteredName.trim() === '') {
      setEnteredNameIsvalid(false)
    }
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()
    setEnteredNameTouched(true)
    if (enteredName.trim() === '') {
      setEnteredNameIsvalid(false)
      return
    }
    setEnteredNameIsvalid(true)
    console.log(enteredName);
    setEnteredName('')
  }

  const nameInputClasses = !enteredNameIsvalid && enteredNameTouched 
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
        {!enteredNameIsvalid && enteredNameTouched && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
