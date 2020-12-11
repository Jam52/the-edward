import React, { useEffect, useRef } from 'react';
import styles from './LandingPage.module.scss';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import OverviewCard from '../../components/OverviewCard/OverviewCard';
import Button, { ExternalLink } from '../../components/Button/Button';
import FadeInTransition from '../../components/FadeInTransition/FadeInTransition';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const houseRef = useRef(null);
  const loftRef = useRef(null);
  const cabinRef = useRef(null);

  const exicuteScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    console.log(ref.current);
    ref.current.focus();
  };

  return (
    <div data-testid="component-landing-page">
      <ImageContainer
        landscapeSrc={process.env.PUBLIC_URL + '/images/Homepage_Hero.jpg'}
        portraitSrc={
          process.env.PUBLIC_URL + '/images/Homepage_Hero_Portrait.jpg'
        }
        alt="Yellow house under bright blue sky"
      />
      <main id="content">
        <section className="explore-section">
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
        </section>

        <section className="section section-light">
          <div className={styles.explore}>
            <div className={styles.explore_header}>
              <h2 className="section_header">
                Make your next visit to wine country memorable.
              </h2>
              <p className="section_detail">
                Stay with us at one of our three accommodations in Prince Edward
                County and treat yourself to a luxurious country experience
                nestled in 75 acres of peaceful nature away from the fast-paced
                city life.
              </p>
            </div>
            <div className={styles.explore_scroll}>
              <button
                aria-label="scroll to house overview"
                onClick={() => exicuteScrollTo(houseRef)}
              >
                House
              </button>
              <button
                aria-label="scroll to loft overview"
                onClick={() => exicuteScrollTo(loftRef)}
              >
                Loft
              </button>
              <button
                aria-label="scroll to cabin overview"
                onClick={() => exicuteScrollTo(cabinRef)}
              >
                Cabin
              </button>
            </div>
          </div>

          <div className={`${styles.cardContainer}`}>
            <OverviewCard
              refProp={houseRef}
              img={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
              imgAlt="Inside of house, white walls dark wood"
              roomName="House"
              overview="With 24ft high atrium ceilings and three grand suites this light filler 3,000 sqft house is ideal for families or a group of friends."
              occupancy={['6 Adults', '3 Children']}
              rate="From $675/night + Cleaning Fee"
              to="/house"
            />

            <OverviewCard
              refProp={loftRef}
              isFlipped
              img={process.env.PUBLIC_URL + '/images/Homepage_Loft.jpg'}
              imgAlt="Inside of loft, white walls, large bed"
              roomName="Loft"
              overview="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into somthing more."
              occupancy={['2 Adults', '2 Children Under 10']}
              rate="From $275/night + Cleaning Fee"
              to="/loft"
            />

            <OverviewCard
              refProp={cabinRef}
              img={process.env.PUBLIC_URL + '/images/Homepage_Cabin.jpg'}
              imgAlt="Glamping style cabin, large glass, amazing wooded surroundings."
              roomName="Cabin"
              overview="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into somthing more."
              occupancy={['2 Adults', '1 Dog']}
              rate="From $399(for a 2-night getaway)"
              to="/cabin"
            />
          </div>
          <section className={`${styles.concierge} section section-dark`}>
            <div className={styles.concierge_header}>
              <h2 className="section_header">The Concierge</h2>
              <p>
                We are here for you blah blah, if you have questions or special
                requests blah blah email us at welcome@theedward.ca. Our
                customer experience hours of operations are between 8:00 am and
                5:00pm.
              </p>
            </div>
            <div className={styles.concierge_details}>
              <div className={styles.concierge_section}>
                <h3>How to find us</h3>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/maps/place/The+Edward+Bed+%26+Breakfast/@44.0317706,-77.0398409,17z/data=!3m1!4b1!4m8!3m7!1s0x89d7c8cb02908139:0xdf06b6bf77c6a155!5m2!4m1!1i2!8m2!3d44.0317706!4d-77.0376522"
                >
                  <p>
                    <b>Latitude:</b> 44.031892
                  </p>
                  <p>
                    <b>Longitude:</b> -77.037088
                  </p>
                  <p>
                    662 Country Road 7 <br /> (also known as Lake on the
                    Mountain Road, Picton, ON, K0K 2T0
                  </p>
                </a>
              </div>
              <div className={styles.concierge_section}>
                <h3>Arriving at The Edward</h3>
                <p>
                  <b>Check-in:</b> 4:00pm
                </p>
                <p>
                  <b>Check-out:</b> 12:00pm
                </p>
                <p>Please specify if you would like a contactless checkin.</p>
              </div>
              <div className={styles.concierge_section}>
                <h3>Cancellations</h3>
                <p>
                  <b>Full Refund</b> 2 weeks notice
                </p>
                <p>
                  <b>%50 Refund:</b> 1 week notice
                </p>
                <p>Please specify if you would like a contactless checkin.</p>
              </div>
            </div>
          </section>
        </section>
        <FadeInTransition>
          <div className="explore-section">
            <p>The Edward Traveler’s Guide</p>
            <p className="explore-section__main">
              How do you best enjoy your time in Ontario’s gastronomical
              capital?
            </p>

            <Button text="See our top picks" to="/" />
          </div>
        </FadeInTransition>
        <ImageContainer
          landscapeSrc={process.env.PUBLIC_URL + '/images/Homepage_Footer.jpg'}
          portraitSrc={
            process.env.PUBLIC_URL + '/images/Homepage_Footer_Portrait.jpg'
          }
          alt="Bike beneath a green tree on a sunny day"
        />
      </main>
    </div>
  );
};

export default LandingPage;
