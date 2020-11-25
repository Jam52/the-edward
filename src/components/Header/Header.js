import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import NavList from '../NavList/NavList';

const Header = () => {
  return (
    <header data-testid="component-header" className={styles.header}>
      <h1 className={styles.header_title}>
        <Link to="/">The Edward</Link>
      </h1>

      <NavList />
    </header>
  );
};

export default Header;
