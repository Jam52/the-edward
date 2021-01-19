import React from 'react';
import styles from './ImageCarousel.module.scss';

const Slide = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.url.url})`,
        width: `${props.width() * 0.8}px`,
      }}
      className={styles.slide}
    ></div>
  );
};

export default Slide;
