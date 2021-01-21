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

  const prevImg = () => {
    let images = document.getElementById('images');
    let lastChild = images.lastElementChild;
    lastChild.style.width = '0px';
    setTimeout(() => {
      images.insertBefore(lastChild, images.childNodes[0]);
      images.firstElementChild.style.width = `${100 / state.imageUrls.length}%`;
    }, 300);
  };

  const nextImg = () => {
    let images = document.getElementById('images');
    let firstChild = images.firstElementChild;
    firstChild.style.width = '0px';
    images.appendChild(firstChild);
    images.lastElementChild.style.width = '0px';
    setTimeout(() => {
      images.lastElementChild.style.width = `${100 / state.imageUrls.length}%`;
    }, 100);
  };

  const renderSlides = state.imageUrls.map((image, index) => {
    return (
      <Slide
        url={image}
        width={`${100 / state.imageUrls.length}%`}
        key={index}
      />
    );
  });

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [translateMod, setTranslateMod] = useState(0);

  // const handleTouchStart = (event) => {
  //   setTouchStart(event.targetTouches[0].clientX);
  // };
  // const handleTouchMove = (event) => {
  //   const possitionX = event.targetTouches[0].clientX;
  //   const possitionDiff = possitionX - touchStart;
  //   console.log(possitionDiff);
  //   setTranslateMod(possitionDiff);
  //   setTouchEnd(possitionX);
  // };
  // const handleMoveEnd = () => {
  //   setTouchStart(0);
  //   setTranslateMod(0);
  //   setTouchEnd(0);
  //   if (touchStart - touchEnd > 50) {
  //     props.swipeNext();
  //   }
  //   if (touchStart - touchEnd < -50) {
  //     props.swipePrev();
  //   }
  // };

  // const handleMouseStart = (event) => {
  //   event.preventDefault();
  //   setTouchStart(event.clientX);
  // };
  // const handleMouseMove = (event) => {
  //   const possitionX = event.clientX;
  //   if (touchStart > 0) {
  //     const possitionDiff = possitionX - touchStart;
  //     setTranslateMod(possitionDiff);
  //     setTouchEnd(possitionX);
  //   }
  // };

  return (
    <div data-testid="component-image-carousel">
      <div className={styles.container}>
        <div
          className={styles.inner_container}
          ref={carouselRef}
          style={{
            transform: `translateX(${-props.transform + translateMod}px)`,
          }}
        >
          {state.imageUrls.length > 0 ? (
            <div
              className={styles.content}
              id="images"
              style={{
                width: `${state.imageUrls.length * 100}%`,
                transform: `translateX(${`-${100 / state.imageUrls.length}%`})`,
              }}
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
