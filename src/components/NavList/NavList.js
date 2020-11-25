import React from 'react';
import NavItem from './NavItem/NavItem';

const NavList = () => {
  return (
    <nav>
      <NavItem to="/house" text="house" />
      <NavItem to="/loft" text="loft" />
      <NavItem to="/cabin" text="cabin" />
    </nav>
  );
};

export default NavList;
