import React from 'react';
import Summary from './summary';
import Carosoul from './carosoul';
import HouseDetails from './houseDetails';
import Availability from './availability';

function House() {
    return (
        <>
            <Summary />
            <Carosoul />
            <HouseDetails />
            <Availability />
        </>
    );
  }