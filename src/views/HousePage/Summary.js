import React from 'react';
import styles from './Summary.module.scss';
import Button from '../../components/Button/Button';
import FadeInTransition from '../../components/FadeInTransition/FadeInTransition';

const Summary = () => {
    return (
    <div className={styles.summaryContainer}>
      <FadeInTransition>
        <div className={styles.innerContainerOne}>

          <h2 className={styles.title}>Welcome to your home away from home.</h2>
          <p className={styles.description}>
          With 24 ft high atrium ceilings and three grand suites this light filled two-
          storey house is ideal for families or a group of friends. Much love, creativity
          and attention to detail has gone into curating a space that balances classic
          and contemporary design and that our guests can call home.
          </p>
        </div>
        <div className={styles.innerContainerTwo}>
          <div className={styles.roomNums}>
            <p className={styles.content}>3 Suites. 3 Baths. 2 Living Spaces.</p>
            <p className={styles.content}>1 Dining Room. 1 Solarium</p>
          </div>
          <div className={styles.occupancy}>
            <h4 className={styles.subheader}>Max Occupancy</h4>
            <p className={styles.content}>6 Adults</p>
            <p className={styles.content}>3 Children under 10</p>
            <br></br>
            <h4 className={styles.rate}>Rate</h4>
            <p className={styles.content}>From From $675/night + Cleaning Fee</p>
          </div>
          <Button className={styles.bookButton} text ={"Book House"}></Button>
        </div>
      </FadeInTransition>
    </div>
    )
  }

export default Summary;