import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import NavList from '../NavList/NavList';

const Header = () => {
  const [isOpen, toggleOpen] = useState(false);

  const crossStyles = isOpen
    ? [styles.menu, styles.cross].join(' ')
    : styles.menu;

  return (
    <header data-testid="component-header">
      <div className={styles.header}>
        <h1 className={styles.header_title}>
          <Link to="/">The Edward</Link>
        </h1>
        <div className={styles.header_nav}>
          <NavList />
        </div>
        <div className={crossStyles} onClick={() => toggleOpen(!isOpen)}>
          <div />
          <div />
          <div />
        </div>
      </div>
      {isOpen ? (
        <div className={styles.dropdown}>
          <NavList click={() => toggleOpen(!isOpen)} />
        </div>
      ) : null}
    </header>
  );
};

export default Header;
