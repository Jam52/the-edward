import React, { useEffect, useState } from 'react';
import styles from './ImageContainer.module.scss';
import Aux from '../../hoc/Auxillary/Auxillary';

const ImageContainer = (props) => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    changeImageOnResize();
    window.addEventListener('resize', function () {
      changeImageOnResize();
    });
  });

  const changeImageOnResize = () => {
    if (window.matchMedia('(orientation: portrait)').matches) {
      setOrientation('portrait');
    } else {
      setOrientation('landscape');
    }
  };

  const portrait = (
    <img
      src={props.portraitSrc}
      alt={props.alt}
      data-testid="portrait"
      className={styles.image}
    />
  );

  const landscape = (
    <img
      src={props.landscapeSrc}
      alt={props.alt}
      data-testid="landscape"
      className={styles.image}
    />
  );

  const images = orientation === 'portrait' ? portrait : landscape;

  return <Aux>{images}</Aux>;
};

export default ImageContainer;
