import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import NavList from '../NavList/NavList';
import edwardSvg from './The Edward_Logo.svg';

const Header = () => {
  const [isOpen, toggleOpen] = useState(false);

  const crossStyles = isOpen
    ? [styles.menu, styles.cross].join(' ')
    : styles.menu;

  return (
    <header data-testid="component-header">
      <div className={styles.header}>
        <h1 className={styles.header_title}>
          <Link to="/">
            <img
              src={edwardSvg}
              alt="the edward"
              className={styles.header_logo}
            />
          </Link>
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

      <div
        className={
          isOpen
            ? [styles.dropdown, styles.dropdown__visible].join(' ')
            : styles.dropdown
        }
      >
        <NavList click={() => toggleOpen(!isOpen)} />
      </div>
    </header>
  );
};

export default Header;
