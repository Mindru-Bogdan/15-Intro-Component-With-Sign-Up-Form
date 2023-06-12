import classes from './Submit.module.css';

const Submit = () => {
  return (
    <div>
      <h3>Try it free 7 days then $20/mo. thereafter</h3>
      <form>
        <input type="text" placeholder="First Name" className={classes.firstName}></input>
        <input type="text" placeholder="Last Name" className={classes.lastName}></input>
        <input type="text" placeholder="Email Address" className={classes.emailAddress}></input>
        <input type="password" placeholder="Password" className={classes.password}></input>
      </form>
      <h2>Claim your free trial</h2>
      <p className={classes.terms}>By clicking the button, you are agreeing to our Terms and Services</p>
    </div>
  );
};

export default Submit;
