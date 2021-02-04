import React from 'react';
import styles from './ToggleButton.module.scss';

const ToggleButton = (props) => {
  const menuButtonStyles = props.isOpen
    ? [styles.menu, styles.rotate].join(' ')
    : styles.menu;

  return (
    <div
      className={menuButtonStyles}
      onClick={props.click}
      id="menu"
      role="button"
      tabIndex="0"
      aria-expanded={props.isOpen}
      aria-label="menu"
    >
      <div style={{ backgroundColor: props.color }} />
      <div style={{ backgroundColor: props.color }} />
    </div>
  );
};

export default ToggleButton;
