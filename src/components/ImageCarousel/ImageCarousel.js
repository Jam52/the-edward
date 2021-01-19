import React, { useRef, useState, useEffect } from 'react';
import styles from './ImageCarousel.module.scss';
import CarouselContent from './CarouselContent';
import { fetchLodgifyImages } from '../../services/lodgifyApi/lodgifyApi';

const ImageCarousel = (props) => {
  const [images, setImages] = useState({
    loading: false,
    imageUrls: [],
  });

  useEffect(() => {
    async function fetchData() {
      setImages({ loading: true, imageUrls: [] });
      try {
        const images = await fetchLodgifyImages(props.propertyId);
        setImages({
          loading: false,
          imageUrls: await images,
        });
        console.log(await images);
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

  const [state, setState] = useState({
    translate: 0,
    transition: 4.5,
    currentImg: 0,
  });

  const { translate, transition } = state;

  const nextImg = () => {
    let imgCount = state.currentImg;
    if (imgCount < images.imageUrls.length - 1) {
      imgCount += 1;
    }
    setState({
      ...state,
      translate: (-getWidth() * 0.8 - 15) * imgCount - 15,
      currentImg: imgCount,
    });
  };

  const prevImg = () => {
    console.log(state.currentImg);
    let imgCount = state.currentImg;
    if (imgCount > 0) {
      imgCount--;
    }
    setState({
      ...state,
      translate: (-getWidth() * 0.8 - 15) * imgCount,
      currentImg: imgCount,
    });
  };

  return (
    <div data-testid="component-image-carousel" ref={carouselRef}>
      <div className={styles.container}>
        <CarouselContent
          transition={transition}
          translate={translate}
          width={() => getWidth()}
          images={images.imageUrls}
          swipeNext={() => nextImg()}
          swipePrev={() => prevImg()}
        />
      </div>
      <div className={styles.arrows}>
        <img
          src={process.env.PUBLIC_URL + '/images/arrow.svg'}
          alt=""
          onClick={() => prevImg()}
          style={state.currentImg === 0 ? { opacity: '0.2' } : null}
        />
        <img
          src={process.env.PUBLIC_URL + '/images/arrow.svg'}
          alt=""
          style={
            state.currentImg === images.imageUrls.length - 1
              ? { opacity: '0.2', transform: 'rotate(180deg)' }
              : { transform: 'rotate(180deg)' }
          }
          onClick={() => nextImg()}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
