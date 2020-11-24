import styles from './ImageContainer.module.scss';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

const ImageContainer = (props) => {
  return (
    <DeviceOrientation>
      <Orientation orientation="portrait" alwaysRender={false}>
        <div
          data-testid="component-image-container"
          className={styles.container}
        >
          <img
            src={props.portraitSrc}
            alt={props.alt}
            data-testid="portrait"
            className={styles.portrait}
          />
        </div>
      </Orientation>
      <Orientation orientation="landscape" alwaysRender={false}>
        <div
          data-testid="component-image-container"
          className={styles.container}
        >
          <img
            className={styles.landscape}
            src={props.landscapeSrc}
            alt={props.alt}
            data-testid="landscape"
          />
        </div>
      </Orientation>
    </DeviceOrientation>
  );
};

export default ImageContainer;
