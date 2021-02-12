import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer
      data-testid="component-footer"
      className={`bg--light ${styles.container}`}
    >
      <div className={`container ${styles.footer}`}>
        <div className={styles.footer_section}>
          <h2>Address</h2>
          <p>
            662 County Road 7<br />
            Picton, ON, K0K 2T0
          </p>
        </div>
        <div className={styles.footer_section}>
          <h2>Contact</h2>
          <a href="tel:+1 613 661 6389">+1 613 661 6389</a>
          <a href="mailto: welcome@theedward.ca">welcome@theedward.ca</a>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/images/Pride-flag.jpg'}
          alt="Pride Flag"
          className={styles.footer_pride}
        />
        <div className={`${styles.footer_section} ${styles.footer_nav}`}>
          <h2>Navigation</h2>
          <NavLink
            to="/"
            exact
            className={styles.nav}
            activeClassName={styles.active}
          >
            Welcome
          </NavLink>
          <NavLink
            to="/house"
            className={styles.nav}
            activeClassName={styles.active}
          >
            House
          </NavLink>
          <NavLink
            to="/loft"
            className={styles.nav}
            activeClassName={styles.active}
          >
            Loft
          </NavLink>
          {/* <NavLink
            to="/cabin"
            className={styles.nav}
            activeClassName={styles.active}
          >
            Cabin
          </NavLink> */}
          {/* <NavLink
            to="/about"
            className={styles.nav}
            activeClassName={styles.active}
          >
            About
          </NavLink> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
