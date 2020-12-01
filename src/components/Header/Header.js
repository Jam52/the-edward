import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import styles from './Header.module.scss';
import NavList from '../NavList/NavList';
import edwardSvg from './The Edward_Logo.svg';

const Header = () => {
  const [isOpen, toggleOpen] = useState(false);

  const menuButtonStyles = isOpen
    ? [styles.menu, styles.rotate].join(' ')
    : styles.menu;

  const toggleMenu = () => {
    toggleOpen(!isOpen);
    if (isOpen) {
      enableBodyScroll(NavList);
    } else {
      disableBodyScroll(NavList);
    }
  };

  return (
    <header data-testid="component-header">
      <div className={styles.header}>
        <h1
          className={
            isOpen
              ? [styles.header_title, styles.hidden].join(' ')
              : styles.header_title
          }
        >
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
        <div className={menuButtonStyles} onClick={toggleMenu} id="menu">
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
        <NavList click={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
