import React, { useEffect } from 'react';
import Summary from './Summary';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import Carosoul from './carosoul';
import HouseDetails from './houseDetails';
import Availability from './availability';
import BookingBar from '../../components/BookingBar/BookingBar';

// import styles from './HousePage.module.scss';

const HousePage = () => {
  //auto scrolls to the top of the page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div data-testid="component-house-page">
      <ImageContainer
        landscapeSrc={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
        portraitSrc={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
        alt="Yellow house under bright blue sky"
      />
      <Summary />
      <BookingBar cost={'From $675/night'} roomId={309275} />
      <Carosoul />
      <HouseDetails />
      <Availability />
    </div>
  );
};

export default HousePage;
