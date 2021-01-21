import React from 'react';
import styles from './ImageCarousel.module.scss';

const Slide = (props) => {
  return (
    <img
      src={props.url.url}
      className={styles.slide}
      alt={props.url.text}
      style={{ width: props.width }}
    />
  );
};

export default Slide;
