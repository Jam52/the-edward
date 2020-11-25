import React, { useEffect, useState } from 'react';
import styles from './ImageContainer.module.scss';

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
    <img src={props.portraitSrc} alt={props.alt} data-testid="portrait" />
  );

  const landscape = (
    <img src={props.landscapeSrc} alt={props.alt} data-testid="landscape" />
  );

  const images = orientation === 'portrait' ? portrait : landscape;

  return (
    <div data-testid="component-image-container" className={styles.container}>
      {images}
    </div>
  );
};

export default ImageContainer;
