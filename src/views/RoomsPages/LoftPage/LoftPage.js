import React, { useEffect, useState, useRef } from 'react';
import ImageContainer from '../../../components/ImageContainer/ImageContainer';
import LoftDetails from './LoftDetails';
import BookingBar from '../../../components/BookingBar/BookingBar';
import { useInView } from 'react-intersection-observer';
import FadeInTransition from '../../../components/FadeInTransition/FadeInTransition';
import ImageCarousel from '../../../components/ImageCarousel/ImageCarousel';
import styles from '../RoomsPage.module.scss';

const HousePage = () => {
  //auto scrolls to the top of the page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showBooking, setBooking] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '100px',
  });

  const detailsRef = useRef(null);

  const exicuteScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (inView) {
      console.log('in view');
      setTimeout(() => {
        setBooking(true);
      }, 0);
    }
  }, [inView]);

  return (
    <div
      data-testid="component-house-page"
      className={`control-flow-vert ${styles.housePage}`}
    >
      <div className={`container control-flow-vert ${styles.container}`}>
        <ImageContainer
          image={process.env.PUBLIC_URL + '/images/Loft_Main.jpg'}
          alt="Beautiful loft room interior, fresh white walls, soft comfortable bed."
          possition="50% 100%"
        />
        <FadeInTransition>
          <div className="split">
            <div className="flow-vert">
              <h2 className={styles.header}>
                Welcome to your home away from home.
              </h2>
              <div className={styles.overview_details}>
                <h3 className="h4">Max Occupancy</h3>
                <ul>
                  <li>2 Adults</li>
                  <li>2 Children under 10</li>
                </ul>
              </div>
            </div>
            <div className={`flow-vert ${styles.description}`}>
              <p className={styles.para}>
                Soft light fills this sweet space with warmth and comfort. Our 2
                suite Loft is the perfect spot for couples or small families to
                come home to after a day of adventure in the County. Inspired by
                summer breezes and warm beach days, this elegant space is sure
                to inspire simple pleasures, time spent together and beautiful
                memories.
              </p>
              <button
                className="internal-link"
                aria-label="scroll to loft overview"
                onClick={() => exicuteScrollTo(detailsRef)}
              >
                See Loft Details
              </button>
            </div>
          </div>
        </FadeInTransition>
      </div>
      <div ref={ref}></div>
      <BookingBar
        bookingUrl="https://airbnb.com/h/theedwardloft"
        show={showBooking}
        title="The Edward Loft"
      />
      <div className="bg--light section ">
        <div className={`container flow-vert-lg`}>
          <div className={styles.imageCarousel}>
            <ImageCarousel propertyId={314112} />
          </div>
          <div ref={detailsRef}>
            <LoftDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousePage;
