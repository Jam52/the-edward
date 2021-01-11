import React, { useState } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import styles from './Dropdown.module.scss';

const Dropdown = (props) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div className="flow-vert">
      <div className={styles.dropdown}>
        <h3 className={styles.dropdown_header}>{props.header}</h3>
        <ToggleButton
          isOpen={isOpen}
          click={() => toggleOpen(!isOpen)}
          color={props.color}
        />
      </div>
      {isOpen ? props.children : null}
      <div className={styles.divider} />
    </div>
  );
};

export default Dropdown;
