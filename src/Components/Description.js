import classes from './Description.module.css';

const Description = () => {
  return (
    <div className={classes.descriptionCard}>
      <h1>Learn to code by watching others</h1>
      <p className={classes.description}>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding
        how developers think is invaluable.
      </p>
    </div>
  );
};

export default Description;
