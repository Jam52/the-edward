import React from 'react';
import styles from './Header.module.scss';
import NavList from '../NavList/NavList';

const Header = () => {
  return (
    <header data-testid="component-header" className={styles.header}>
      <h1 className={styles.header_title}>The Edward</h1>
      <NavList />
    </header>
  );
};

export default Header;
