import React, { useState } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import styles from './Dropdown.module.scss';

const Dropdown = (props) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div className="flow-vert">
      <div className={styles.divider} />
      <div className={styles.dropdown} onClick={() => toggleOpen(!isOpen)}>
        <h3 className={styles.dropdown_header}>{props.header}</h3>
        <ToggleButton
          isOpen={isOpen}
          click={() => toggleOpen(!isOpen)}
          color={props.color}
        />
      </div>
      <div
        className={
          isOpen
            ? `${styles.content_container} ${styles.open}`
            : styles.content_container
        }
      >
        {' '}
        {isOpen ? props.children : null}
      </div>
    </div>
  );
};

export default Dropdown;
