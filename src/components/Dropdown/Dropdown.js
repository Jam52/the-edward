import React, { useState, useEffect, useRef } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import styles from './Dropdown.module.scss';

const Dropdown = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [content, setContent] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    getHeight();
  }, []);

  const getHeight = () => {
    setHeight(ref.current.clientHeight);
  };

  const handelToggleOpen = () => {
    if (!isOpen) {
      setContent(<div className={styles.content}>{props.children}</div>);
      setTimeout(() => {
        getHeight();
      }, 0);
    } else {
      setTimeout(() => {
        setContent(null);
      }, 500);
    }
    toggleOpen(!isOpen);
  };

  return (
    <div className="flow-vert">
      <div className={styles.divider} />
      <div className={styles.dropdown} onClick={handelToggleOpen}>
        <h3 className={styles.dropdown_header}>{props.header}</h3>
        <ToggleButton
          isOpen={isOpen}
          click={handelToggleOpen}
          color={props.color}
        />
      </div>
      <div
        className={styles.content_container}
        style={isOpen ? { maxHeight: height + 50 + 'px' } : null}
      >
        <div ref={ref}>{content}</div>
      </div>
    </div>
  );
};

export default Dropdown;
