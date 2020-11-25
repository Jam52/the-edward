import React, { useState } from 'react';
import styles from './CollapsibleSection.module.scss';

const CollapsibleSection = (props) => {
  const [isVisible, toggleVisible] = useState(false);

  return (
    <section
      data-testid="component-collapsible-section"
      className={styles.collapsibleSection}
    >
      <div
        className={styles.collapsibleSection_dropdown}
        onClick={() => toggleVisible(!isVisible)}
      >
        <h2 className={styles.collapsibleSection_header}>{props.header}</h2>
        <img
          data-testid="arrow"
          className={
            isVisible
              ? [styles.arrow, styles.arrow__down].join(' ')
              : styles.arrow
          }
          src={process.env.PUBLIC_URL + '/images/arrow.png'}
          alt="dropdown arrow"
          aria-roledescription="dropdown for convierge section"
        />
      </div>
      <div
        className={
          isVisible ? [styles.hidden, styles.visible].join(' ') : styles.hidden
        }
      >
        {props.children}
      </div>
    </section>
  );
};

export default CollapsibleSection;
