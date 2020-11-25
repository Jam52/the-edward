import React from 'react';
import styles from './Header.module.scss';
import NavList from '../NavList/NavList';

const Header = () => {
  return (
    <div data-testid="component-header">
      <NavList />
    </div>
  );
};

export default Header;
