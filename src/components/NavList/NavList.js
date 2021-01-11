import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavList.module.scss';

const NavList = (props) => {
  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <NavItem
            to="/house"
            text="House"
            click={props.click}
            tabIndex={props.tabIndex}
          />
        </li>
        <li>
          <NavItem
            to="/loft"
            text="Loft"
            click={props.click}
            tabIndex={props.tabIndex}
          />
        </li>
        <li>
          <NavItem
            to="/cabin"
            text="Cabin"
            click={props.click}
            tabIndex={props.tabIndex}
          />
        </li>
        <li>
          <NavItem
            to="/about"
            text="About"
            click={props.click}
            tabIndex={props.tabIndex}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
