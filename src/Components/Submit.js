import classes from './Submit.module.css';

const Submit = () => {
  return (
    <div className={classes.submitCard}>
      <div className={classes.movingCard}>
        <div className={classes.trial}>
          <h3>
            Try it free 7 days <h4>then $20/mo. thereafter</h4>
          </h3>
        </div>
        <form className={classes.form}>
          <input type="text" placeholder="First Name" className={classes.firstName}></input>
          <input type="text" placeholder="Last Name" className={classes.lastName}></input>
          <input type="text" placeholder="Email Address" className={classes.emailAddress}></input>
          <input type="password" placeholder="Password" className={classes.password}></input>
          <h2 className={classes.claim}>CLAIM YOUR FREE TRIAL</h2>
          <div className={classes.terms}>
            <p className={classes.termsGrey}>
              By clicking the button, you are agreeing to our <p className={classes.termsGreen}> Terms and Services</p>{' '}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submit;
