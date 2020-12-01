import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <div className={styles.button}>
      <Link
        data-testid="component-button"
        className={styles.button_link}
        to={props.to}
      >
        {props.text}
      </Link>
    </div>
  );
};

export const ExternalLink = (props) => {
  return (
    <div className={styles.button}>
      <a
        className={styles.button_link}
        href={props.to}
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
      </a>
    </div>
  );
};

Button.propTypes = {
  // to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
