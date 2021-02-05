import React from 'react';
import styles from './TempSplash.module.scss';

const TempSplash = () => {
  return (
    <div className={`${styles.page} control-flow-vert`}>
      <img
        className={styles.logo}
        src={process.env.PUBLIC_URL + './images/The Edward_Logo.svg'}
        alt="The Edward"
      />
      <main className={`${styles.container} control-flow-vert`}>
        <p>– COVID19 Update –</p>
        <h1>Closed due to provincial lockdown.</h1>
        <p>
          We are working on a new website for 2021. In the meantime, please
          follow us on{' '}
          <a href="https://www.instagram.com/theedwardpec/">Instagram</a> for
          updates and the latest information about The Edward.
          <br />
          <br /> ​ For 2021 booking enquiries, please email us at{' '}
          <a className="internal-link" href="mailto:welcome@theedward.ca">
            welcome@theedward.ca
          </a>
        </p>
      </main>
    </div>
  );
};

export default TempSplash;
