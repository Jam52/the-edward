import React from 'react';
import Summary from './summary';
import Carosoul from './carosoul';
import HouseDetails from './houseDetails';
import Availability from './availability';
import styles from './HousePage.module.scss';

const HousePage = () => {
  return (
    <div data-testid="component-house-page">
      <Summary />
      <Carosoul />
      <HouseDetails />
      <Availability />
    </div>
  );
};

export default HousePage;