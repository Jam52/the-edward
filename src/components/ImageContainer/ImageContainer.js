// import React, { useEffect, useState } from 'react';
import styles from './ImageContainer.module.scss';
// import Aux from '../../hoc/Auxillary/Auxillary';

const ImageContainer = (props) => {
  return (
    <img
      src={props.image}
      alt={props.alt}
      data-testid="landscape"
      className={styles.image}
      style={{ objectPosition: props.possition }}
    />
  );
};

export default ImageContainer;
