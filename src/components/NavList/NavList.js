import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavList.module.scss';

const NavList = (props) => {
  return (
    <nav className={styles.container}>
      <NavItem to="/house" text="house" click={props.click} />
      <NavItem to="/loft" text="loft" click={props.click} />
      <NavItem to="/cabin" text="cabin" click={props.click} />
      <NavItem to="/about" text="about" click={props.click} />
    </nav>
  );
};

export default NavList;
