import React, { useState, useEffect, useRef } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import styles from './Dropdown.module.scss';

const Dropdown = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

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
        className={styles.content_container}
        style={isOpen ? { maxHeight: height + 'px' } : null}
      >
        <div ref={ref}>{props.children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
