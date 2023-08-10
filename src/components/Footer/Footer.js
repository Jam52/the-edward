import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer
      data-testid="component-footer"
      className={`bg--light ${styles.container}`}
    >
      <div className="container">
        <div className={styles.footer}>
          <a href="https://www.instagram.com/theedwardpec/" target='_blank' rel='noreferrer noopener'>
            <img src={process.env.PUBLIC_URL + 'images/insta.png'} className={styles.insta_icon} alt="instagram"/>
          </a>
          <div className={styles.footer_section}>
            <h2>Address</h2>
            <p>
              662 County Road 7<br />
              Picton, ON, K0K 2T0
            </p>
          </div>
          <div className={styles.footer_section}>
            <h2>Contact</h2>
            <a href="mailto: hello@countycurated.com">hello@countycurated.com</a>
          </div>
          <img
            src={process.env.PUBLIC_URL + '/images/Pride-flag_new.jpg'}
            alt="Pride Flag"
            className={styles.footer_pride}
          />
        </div>
        <p className={styles.credit}>
          Website Developed By{' '}
          <a
            className="internal-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.jamiesajdak.com/"
            aria-label="Link to Jamie Sajdak's porfolio website, opens new page"
          >
            Jamie Sajdak
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
