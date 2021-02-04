import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavList.module.scss';

const NavList = (props) => {
  return (
    <nav className={styles.container}>
      <NavLink
        to="/"
        exact
        className={styles.nav}
        activeClassName={styles.active}
        onClick={props.click}
        tabIndex={props.tabIndex}
      >
        Homepage
      </NavLink>
      <NavLink
        to="/house"
        className={styles.nav}
        activeClassName={styles.active}
        onClick={props.click}
        tabIndex={props.tabIndex}
      >
        House
      </NavLink>
      <NavLink
        to="/loft"
        className={styles.nav}
        activeClassName={styles.active}
        onClick={props.click}
        tabIndex={props.tabIndex}
      >
        Loft
      </NavLink>

      {/* <NavLink
        to="/about"
        className={styles.nav}
        activeClassName={styles.active}
        onClick={props.click}
        tabIndex={props.tabIndex}
      >
        About
      </NavLink> */}
    </nav>
  );
};

export default NavList;
