import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavList.module.scss';

const NavList = (props) => {
  return (
    <nav className={styles.container}>
      <NavItem to="/house" text="House" click={props.click} />
      <NavItem to="/loft" text="Loft" click={props.click} />
      <NavItem to="/cabin" text="Cabin" click={props.click} />
      <NavItem to="/about" text="About" click={props.click} />
    </nav>
  );
};

export default NavList;
