import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavLitem.module.scss';

const NavItem = (props) => {
  return (
    <NavLink
      to={props.to}
      className={styles.nav}
      activeClassName={styles.active}
      onClick={props.click}
      tabIndex={props.tabIndex}
    >
      {props.text}
    </NavLink>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
