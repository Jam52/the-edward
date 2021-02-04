import React from 'react';
import styles from './ToggleButton.module.scss';

const ToggleButton = (props) => {
  const menuButtonStyles = props.isOpen
    ? [styles.menu, styles.rotate].join(' ')
    : styles.menu;

  const onEnterHandler = (event) => {
    if (event.key === 'Enter') {
      props.click();
    }
  };

  return (
    <div
      className={menuButtonStyles}
      onClick={props.click}
      id="menu"
      role="button"
      tabIndex="0"
      aria-expanded={props.isOpen}
      aria-label="menu"
      onKeyDown={(event) => onEnterHandler(event)}
    >
      <div style={{ backgroundColor: props.color }} />
      <div style={{ backgroundColor: props.color }} />
    </div>
  );
};

export default ToggleButton;
