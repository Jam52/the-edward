import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer
      data-testid="component-footer"
      className={`section section-light ${styles.footer}`}
    >
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
      <div className={styles.footer_section}>
        <h2>Navigation</h2>
        <Link to="/">Home</Link>
        <Link to="/house">House</Link>
        <Link to="/cabin">Cabin</Link>
        <Link to="/loft">Loft</Link>
        <Link to="/about">About</Link>
      </div>
    </footer>
  );
};

export default Footer;
