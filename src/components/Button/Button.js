import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <div className={styles.button}>
      <Link data-testid="component-button" className={styles.button_link}>
        {props.text}
      </Link>
    </div>
  );
};

export default Button;
