import React from 'react';
import styles from './LandingPage.module.scss';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import OverviewCard from '../../components/OverviewCard/OverviewCard';
import Button from '../../components/Button/Button';
import FadeInTransition from '../../components/FadeInTransition/FadeInTransition';

const LandingPage = () => {
  return (
    <div data-testid="component-landing-page">
      <ImageContainer
        landscapeSrc={process.env.PUBLIC_URL + '/images/Homepage_Hero.jpg'}
        portraitSrc={
          process.env.PUBLIC_URL + '/images/Homepage_Hero_Portrait.jpg'
        }
        alt="Yellow house under bright blue sky"
      />

      <FadeInTransition>
        <div className="explore-section">
          <p className=" explore-section__main">
            "Five-star luxury; a million star experience."
          </p>
          <p>- Returning Guests</p>
          <Button text="See all reviews" />
        </div>
      </FadeInTransition>
      <div className="section section-light">
        <h2 className="section_header">
          Make your next visit to wine country memorable.
        </h2>
        <p className="section_detail">
          Stay with us at one of our three accommodations in Prince Edward
          County and treat yourself to a luxurious country experience nestled in
          75 acres of peaceful nature away from the fast-paced city life.
        </p>
        <div className={`${styles.cardContainer}`}>
          <FadeInTransition>
            <OverviewCard
              img={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
              altImg="Inside of house, white walls dark wood"
              roomName="House"
              overview="With 24ft high atrium ceilings and three grand suites this light filler 3,000 sqft house is ideal for families or a group of friends."
              occupancy={['6 Adults', '3 Children']}
              rate="From $675/night + Cleaning Fee"
              to="/house"
            />
          </FadeInTransition>
          <FadeInTransition delay={150}>
            <OverviewCard
              img={process.env.PUBLIC_URL + '/images/Homepage_Loft.jpg'}
              altImg="Inside of loft, white walls, large bed"
              roomName="Loft"
              overview="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into somthing more."
              occupancy={['2 Adults', '2 Children Under 10']}
              rate="From $275/night + Cleaning Fee"
            />
          </FadeInTransition>
          <FadeInTransition delay={300}>
            <OverviewCard
              img={process.env.PUBLIC_URL + '/images/Homepage_Cabin.jpg'}
              altImg="Glamping style cabin, large glass, amazing wooded surroundings."
              roomName="Cabin"
              overview="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into somthing more."
              occupancy={['2 Adults', '1 Dog']}
              rate="From $399(for a 2-night getaway)"
            />
          </FadeInTransition>
        </div>
      </div>
      <FadeInTransition>
        <div className="explore-section">
          <p>The Edward Traveler’s Guide</p>
          <p className="explore-section__main">
            How do you best enjoy your time in Ontario’s gastronomical capital?
          </p>

          <Button text="See our top picks" />
        </div>
      </FadeInTransition>
    </div>
  );
};

export default LandingPage;
