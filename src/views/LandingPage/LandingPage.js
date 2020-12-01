import React, { useEffect } from 'react';
import styles from './LandingPage.module.scss';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import OverviewCard from '../../components/OverviewCard/OverviewCard';
import Button, { ExternalLink } from '../../components/Button/Button';
import FadeInTransition from '../../components/FadeInTransition/FadeInTransition';
import CollapsibleSection from '../../components/CollapsibleSection/CollapsibleSection';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div data-testid="component-landing-page">
      <ImageContainer
        landscapeSrc={process.env.PUBLIC_URL + '/images/Homepage_Hero.jpg'}
        portraitSrc={
          process.env.PUBLIC_URL + '/images/Homepage_Hero_Portrait.jpg'
        }
        alt="Yellow house under bright blue sky"
      />

      <div className="explore-section">
        <FadeInTransition>
          <p className=" explore-section__main">
            "Five-star luxury; a million star experience."
          </p>
          <p>- Returning Guests</p>
          <ExternalLink
            text="See all reviews"
            to="https://www.google.com/maps/place/The+Edward+Bed+%26+Breakfast/@44.0317706,-77.0398409,17z/data=!3m1!4b1!4m10!3m9!1s0x0:0xdf06b6bf77c6a155!5m2!4m1!1i2!8m2!3d44.0317706!4d-77.0376522!9m1!1b1"
          />
        </FadeInTransition>
      </div>

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
          <OverviewCard
            img={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
            altImg="Inside of house, white walls dark wood"
            roomName="House"
            overview="With 24ft high atrium ceilings and three grand suites this light filler 3,000 sqft house is ideal for families or a group of friends."
            occupancy={['6 Adults', '3 Children']}
            rate="From $675/night + Cleaning Fee"
            to="/house"
          />

          <OverviewCard
            isFlipped
            img={process.env.PUBLIC_URL + '/images/Homepage_Loft.jpg'}
            altImg="Inside of loft, white walls, large bed"
            roomName="Loft"
            overview="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into somthing more."
            occupancy={['2 Adults', '2 Children Under 10']}
            rate="From $275/night + Cleaning Fee"
            to="/loft"
          />

          <OverviewCard
            img={process.env.PUBLIC_URL + '/images/Homepage_Cabin.jpg'}
            altImg="Glamping style cabin, large glass, amazing wooded surroundings."
            roomName="Cabin"
            overview="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into somthing more."
            occupancy={['2 Adults', '1 Dog']}
            rate="From $399(for a 2-night getaway)"
            to="/cabin"
          />
        </div>
        <CollapsibleSection header="The Concierge">
          <div className={styles.concierge}>
            <div className={styles.concierge_section}>
              <h3>Check In / Check Out</h3>
              <p>
                <b>Check-in:</b> 4pm
              </p>
              <p>
                <b>Check-out:</b> 12pm
              </p>
              <p>Please specify if you would like a contactless checkin.</p>
            </div>
            <div className={styles.concierge_section}>
              <h3>Check In / Check Out</h3>
              <p>
                <b>Check-in:</b> 4pm
              </p>
              <p>
                <b>Check-out:</b> 12pm
              </p>
              <p>Please specify if you would like a contactless checkin.</p>
            </div>
            <div className={styles.concierge_section}>
              <h3>Check In / Check Out</h3>
              <p>
                <b>Check-in:</b> 4pm
              </p>
              <p>
                <b>Check-out:</b> 12pm
              </p>
              <p>Please specify if you would like a contactless checkin.</p>
            </div>
            <div className={styles.concierge_section}>
              <h3>Check In / Check Out</h3>
              <p>
                <b>Check-in:</b> 4pm
              </p>
              <p>
                <b>Check-out:</b> 12pm
              </p>
              <p>Please specify if you would like a contactless checkin.</p>
            </div>
          </div>
        </CollapsibleSection>
      </div>
      <FadeInTransition>
        <div className="explore-section">
          <p>The Edward Traveler’s Guide</p>
          <p className="explore-section__main">
            How do you best enjoy your time in Ontario’s gastronomical capital?
          </p>

          <Button text="See our top picks" to="/" />
        </div>
      </FadeInTransition>
      <FadeInTransition>
        <ImageContainer
          landscapeSrc={process.env.PUBLIC_URL + '/images/Homepage_Footer.jpg'}
          portraitSrc={
            process.env.PUBLIC_URL + '/images/Homepage_Footer_Portrait.jpg'
          }
          alt="Bike beneath a green tree on a sunny day"
        />
      </FadeInTransition>
    </div>
  );
};

export default LandingPage;
