import React, { useRef, useState, useEffect } from 'react';
import styles from './ImageCarousel.module.scss';
import { fetchLodgifyImages } from '../../services/lodgifyApi/lodgifyApi';
import Spinner from '../Spinner/Spinner';
import Slide from './Slide';

const ImageCarousel = (props) => {
  const [state, setState] = useState({
    loading: false,
    imageUrls: [],
    direction: '',
  });

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, imageUrls: [] });
      try {
        const images = await fetchLodgifyImages(props.propertyId);
        setState({
          loading: false,
          imageUrls: [images[images.length - 1], ...images, images[0]],
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [props.propertyId]);

  const carouselRef = useRef(null);

  const getWidth = () => {
    return carouselRef.current.offsetWidth;
  };

  const nextImg = () => {
    let images = document.getElementById('images');
    let lastChild = images.lastElementChild;
    lastChild.style.width = '0';
    setTimeout(() => {
      images.insertBefore(lastChild, images.childNodes[0]);
      images.firstElementChild.style.width = `${getWidth() - 15}px`;
    }, 500);
  };

  const prevImg = () => {
    let images = document.getElementById('images');
    let firstChild = images.firstElementChild;
    firstChild.style.width = '0';
    images.appendChild(firstChild);
    images.lastElementChild.style.width = `${getWidth() - 15}px`;
  };

  const renderSlides = state.imageUrls.map((image, index) => {
    return <Slide url={image} width={getWidth} key={index} />;
  });

  return (
    <div data-testid="component-image-carousel">
      <div className={styles.container}>
        <div className={styles.inner_container} ref={carouselRef}>
          {state.imageUrls.length > 0 ? (
            <div
              className={styles.content}
              id="images"
              style={{ width: getWidth() * (state.imageUrls.length - 2) }}
            >
              {renderSlides}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
      <div className={styles.arrows}>
        <img
          role="button"
          aria-label="previouse image"
          src={process.env.PUBLIC_URL + '/images/arrow.svg'}
          alt=""
          onClick={() => prevImg()}
        />
        <img
          role="button"
          aria-label="next image"
          src={process.env.PUBLIC_URL + '/images/arrow.svg'}
          style={{ transform: 'rotate(180deg)' }}
          onClick={() => nextImg()}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
