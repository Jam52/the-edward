import React from 'react';
import Summary from './summary';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import Carosoul from './carosoul';
import HouseDetails from './houseDetails';
import Availability from './availability';
// import styles from './HousePage.module.scss';

const HousePage = () => {
  return (
    <div data-testid="component-house-page">
      <ImageContainer
        landscapeSrc={process.env.PUBLIC_URL + '/images/Homepage_Hero.jpg'}
        portraitSrc={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
        alt="Yellow house under bright blue sky"
      />
      <Summary />
      <Carosoul />
      <HouseDetails />
      <Availability />
    </div>
  );
};

export default HousePage;