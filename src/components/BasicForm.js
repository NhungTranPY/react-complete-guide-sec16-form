import useInput from '../hooks/use-input'

const isNotEmpty = value => value.trim() !== ''
const isEmail = value => value.includes('@')


const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty)

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty)

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail)

  let formIsValid = false

  if (firstNameIsValid && lastNameIsValid && emailIsValid) { // could be (!formIsValid)
    formIsValid = true
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()
    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return
    }
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);
    resetFirstName()
    resetLastName()
    resetEmail()
  }

  const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
  const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            value={firstNameValue} 
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">First Name must not be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Last Name must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name' 
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
