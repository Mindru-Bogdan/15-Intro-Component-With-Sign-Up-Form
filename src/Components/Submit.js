import { useState } from 'react';

import errorImage from '../../src/icon-error.svg';

import classes from './Submit.module.css';

const Submit = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameValidity, setFirstNameValidity] = useState(true);
  const [lastNameValidity, setLastNameValidity] = useState(true);
  const [emailValidity, setEmailValidity] = useState(true);
  const [passwordValidity, setPasswordValidity] = useState(true);

  const firstNameSet = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameSet = (event) => {
    setLastName(event.target.value);
  };

  const emailSet = (event) => {
    setEmail(event.target.value);
  };

  const passwordSet = (event) => {
    setPassword(event.target.value);
  };

  const isFirstNameValid = (firstName) => {
    return /\S/.test(firstName);
  };

  const isLastNameValid = (lastName) => {
    return /\S/.test(lastName);
  };

  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isPasswordValid = (password) => {
    return /\S/.test(password);
  };

  const firstNameValidityHandler = (event) => {
    if (!isFirstNameValid(firstName)) {
      setFirstNameValidity(false);
    } else {
      setFirstNameValidity(true);
    }
  };

  const lastNameValidityHandler = (event) => {
    if (!isLastNameValid(lastName)) {
      setLastNameValidity(false);
    } else {
      setLastNameValidity(true);
    }
  };

  const emailValidityHandler = (event) => {
    if (!isEmailValid(email)) {
      setEmailValidity(false);
    } else {
      setEmailValidity(true);
    }
  };

  const passwordValidityHandler = (event) => {
    if (!isPasswordValid(password)) {
      setPasswordValidity(false);
    } else {
      setPasswordValidity(true);
    }
  };

  const ValidityHandler = (event) => {
    firstNameValidityHandler(event);
    lastNameValidityHandler(event);
    emailValidityHandler(event);
    passwordValidityHandler(event);
  };

  return (
    <div className={classes.submitCard}>
      <div className={classes.movingCard}>
        <div className={classes.trial}>
          <h3>Try it free 7 days</h3>
          <h4> then $20/mo. thereafter</h4>
        </div>
        <form className={classes.form}>
          <div className={classes.whiteSpace} />
          <input
            type="text"
            placeholder={firstNameValidity ? 'First Name' : ''}
            onChange={firstNameSet}
            className={firstNameValidity ? classes.normalInput : classes.errorInput}
          ></input>
          <img src={errorImage} className={firstNameValidity ? classes.hidden : classes.errorImg} />
          <p className={firstNameValidity ? classes.hidden : classes.errorMessage}>First Name cannot be empty</p>
          <input
            type="text"
            placeholder={lastNameValidity ? 'Last Name' : ''}
            onChange={lastNameSet}
            className={lastNameValidity ? classes.normalInput : classes.errorInput}
          ></input>
          <img src={errorImage} className={lastNameValidity ? classes.hidden : classes.errorImg} />
          <p className={lastNameValidity ? classes.hidden : classes.errorMessage}>Last Name cannot be empty</p>
          <input
            type="text"
            placeholder={emailValidity ? 'Email Address' : ''}
            onChange={emailSet}
            className={emailValidity ? classes.normalInput : classes.errorInput}
          ></input>
          <img src={errorImage} className={emailValidity ? classes.hidden : classes.errorImg} />
          <p className={emailValidity ? classes.hidden : classes.errorMessage}>Looks like this is not an email</p>
          <input
            type="password"
            placeholder={passwordValidity ? 'Password' : ''}
            onChange={passwordSet}
            className={passwordValidity ? classes.normalInput : classes.errorInput}
          ></input>
          <img src={errorImage} className={passwordValidity ? classes.hidden : classes.errorImg} />
          <p className={passwordValidity ? classes.hidden : classes.errorMessage}>Password cannot be empty</p>
          <h2 onClick={ValidityHandler} className={classes.claim}>
            CLAIM YOUR FREE TRIAL
          </h2>
          <div className={classes.terms}>
            <p className={classes.termsGrey}>By clicking the button, you are agreeing to our </p>
            <p className={classes.termsGreen}> Terms and Services</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submit;
