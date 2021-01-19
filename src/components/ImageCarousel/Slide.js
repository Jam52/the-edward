import React from 'react';
import styles from './ImageCarousel.module.scss';

const Slide = (props) => {
  return (
    <img
      src={props.url.url}
      style={{
        width: `${props.width() * 0.85}px`,
      }}
      className={styles.slide}
      alt={props.url.text}
    />
  );
};

export default Slide;
