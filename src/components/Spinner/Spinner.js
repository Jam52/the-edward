import React from 'react';
import classes from './Spinner.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';

const Spinner = () => (
  <Aux>
    <div className={classes.Container}>
      <div className={classes.LoaderContainer}>
        <div className={classes.Loader}></div>
        <img
          src={process.env.PUBLIC_URL + '/favicon.png'}
          className={classes.Icon}
          alt="Cocktail Glass Logo"
        ></img>
      </div>
    </div>
  </Aux>
);

export default Spinner;
