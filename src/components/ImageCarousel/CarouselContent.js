import React, { useState } from 'react';
import Slide from './Slide';
import styles from './ImageCarousel.module.scss';

const CarouselContent = (props) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [translateMod, setTranslateMod] = useState(0);

  const handleTouchStart = (event) => {
    setTouchStart(event.targetTouches[0].clientX);
  };
  const handleTouchMove = (event) => {
    const possitionX = event.targetTouches[0].clientX;
    const possitionDiff = possitionX - touchStart;
    console.log(possitionDiff);
    setTranslateMod(possitionDiff);
    setTouchEnd(possitionX);
  };
  const handleMoveEnd = () => {
    setTouchStart(0);
    setTranslateMod(0);
    setTouchEnd(0);
    if (touchStart - touchEnd > 50) {
      props.swipeNext();
    }
    if (touchStart - touchEnd < -50) {
      props.swipePrev();
    }
  };

  const handleMouseStart = (event) => {
    event.preventDefault();
    setTouchStart(event.clientX);
  };
  const handleMouseMove = (event) => {
    const possitionX = event.clientX;
    if (touchStart > 0) {
      const possitionDiff = possitionX - touchStart;
      setTranslateMod(possitionDiff);
      setTouchEnd(possitionX);
    }
  };

  return (
    <div
      style={{
        transform: `translateX(${
          -props.width() + props.transform + translateMod
        }px)`,
      }}
      className={styles.content}
      onTouchStart={(event) => handleTouchStart(event)}
      onTouchMove={(event) => handleTouchMove(event)}
      onTouchEnd={handleMoveEnd}
      onMouseDown={(event) => handleMouseStart(event)}
      onMouseMove={(event) => handleMouseMove(event)}
      onMouseUp={handleMoveEnd}
    >
      {props.images
        ? props.images.map((imageUrl, index) => {
            return <Slide url={imageUrl} key={index} width={props.width} />;
          })
        : null}
    </div>
  );
};

export default CarouselContent;
