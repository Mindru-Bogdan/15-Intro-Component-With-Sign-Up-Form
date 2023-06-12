import Description from './Description.js';
import Submit from './Submit.js';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.body}>
      <Description />
      <Submit />
    </div>
  );
};

export default Card;
