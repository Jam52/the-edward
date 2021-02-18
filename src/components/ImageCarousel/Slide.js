import React from 'react';
import styles from './ImageCarousel.module.scss';

const Slide = (props) => {
  return (
    <div className={styles.slideContainer} style={{ width: props.width }}>
      <img src={props.url.url} className={styles.slide} alt={props.url.text} />
    </div>
  );
};

export default Slide;
