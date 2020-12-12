import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavList.module.scss';

const NavList = (props) => {
  return (
    <nav className={styles.container}>
      <NavItem
        to="/house"
        text="House"
        click={props.click}
        tabIndex={props.tabIndex}
      />
      <NavItem
        to="/loft"
        text="Loft"
        click={props.click}
        tabIndex={props.tabIndex}
      />
      <NavItem
        to="/cabin"
        text="Cabin"
        click={props.click}
        tabIndex={props.tabIndex}
      />
      <NavItem
        to="/about"
        text="About"
        click={props.click}
        tabIndex={props.tabIndex}
      />
    </nav>
  );
};

export default NavList;
