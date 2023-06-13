import Description from './Description.js';
import Submit from './Submit.js';

import BackgroundDesktop from '../../src/bg-intro-desktop.png';
import BackgroundMobile from '../../src/bg-intro-mobile.png';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.body}>
      <img src={BackgroundDesktop} className={classes.desktop} />
      <img src={BackgroundMobile} className={classes.mobile} />
      <Description />
      <Submit />
    </div>
  );
};

export default Card;
