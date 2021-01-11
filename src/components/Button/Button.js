import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link
      data-testid="component-button"
      to={props.to}
      className="btn btn--light"
    >
      {props.text}
    </Link>
  );
};

export const ExternalLink = (props) => {
  return (
    <a
      className="btn btn--light"
      href={props.to}
      target="_blank"
      rel="noreferrer"
      aria-label={`${props.text} opens in new window`}
    >
      {props.text}
    </a>
  );
};

Button.propTypes = {
  // to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
