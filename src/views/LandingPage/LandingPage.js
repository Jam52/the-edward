import React from 'react';
import styles from './LandingPage.module.scss';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import OverviewCard from '../../components/OverviewCard/OverviewCard';

const LandingPage = () => {
  return (
    <div data-testid="component-landing-page">
      <ImageContainer
        landscapeSrc={process.env.PUBLIC_URL + '/images/Homepage_Hero.jpg'}
        portraitSrc={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
        alt="Yellow house under bright blue sky"
      />
      <div className={styles.cardContainer}>
        <OverviewCard
          img={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
          imgAlt="Inside of house, white walls dark wood"
          roomName="House"
          overview="With 24ft high atrium ceilings and three grand suites this light filler 3,000 sqft house is ideal for damilies or a group of friends."
          occupancy={['6 Adults', '3 Children']}
          rate="From $675/night + Cleaning Fee"
        />
        <OverviewCard
          img={process.env.PUBLIC_URL + '/images/Homepage_Loft.jpg'}
          imgAlt="Inside of loft, white walls, large bed"
          roomName="Loft"
          overview="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into somthing more."
          occupancy={['2 Adults', '2 Children Under 10']}
          rate="From $275/night + Cleaning Fee"
        />
        <OverviewCard
          img={process.env.PUBLIC_URL + '/images/Homepage_Cabin.jpg'}
          imgAlt="Glamping style cabin, large glass, amazing wooded surroundings."
          roomName="Cabin"
          overview="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into somthing more."
          occupancy={['2 Adults', '1 Dog']}
          rate="From $399(for a 2-night getaway)"
        />
      </div>
    </div>
  );
};

export default LandingPage;
