import React, { useEffect, useState, useRef } from 'react';
import ImageContainer from '../../../components/ImageContainer/ImageContainer';
import CabinDetails from './CabinDetails';
import BookingBar from '../../../components/BookingBar/BookingBar';
import { useInView } from 'react-intersection-observer';
import {
  addDate,
  removeDate,
  isDateAvailable,
} from '../../../services/calendarLogic/blockBookingCalendar.js';
import FadeInTransition from '../../../components/FadeInTransition/FadeInTransition';
import ImageCarousel from '../../../components/ImageCarousel/ImageCarousel';
import styles from '../RoomsPage.module.scss';

const CabinPage = () => {
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
      data-testid="component-cabin-page"
      className={`control-flow-vert ${styles.housePage}`}
    >
      <div className={`container control-flow-vert ${styles.container}`}>
        <ImageContainer
          landscapeSrc={
            process.env.PUBLIC_URL + '/images/Cabin_Hero_Landscape.jpg'
          }
          portraitSrc={
            process.env.PUBLIC_URL + '/images/Cabin_Hero_Portrait.jpg'
          }
          alt="Interior of Loft, white walls soft bed."
        />
        <FadeInTransition>
          <div className="split">
            <div className="flow-vert">
              <h2 className={styles.header}>
                Welcome to your home away from home.
              </h2>
              <div>
                <h3>Max Occupancy</h3>
                <ul>
                  <li>6 Adults</li>
                  <li>3 Children under 10</li>
                </ul>
              </div>
            </div>
            <div className={`flow-vert ${styles.description}`}>
              <p className={styles.para}>
                With 24 ft high atrium ceilings and three grand suites this
                light filled two- storey house is ideal for families or a group
                of friends. Much love, creativity and attention to detail has
                gone into curating a space that balances classic and
                contemporary design and that our guests can call home.
              </p>
              <button
                className="internal-link"
                aria-label="scroll to loft overview"
                onClick={() => exicuteScrollTo(detailsRef)}
              >
                See Cabin Details
              </button>
            </div>
          </div>
        </FadeInTransition>
      </div>
      <div ref={ref}></div>
      <BookingBar
        cost={'$615/Weekend +tax'}
        propertyId={314113}
        roomTypeId={379185}
        show={showBooking}
        addDate={addDate}
        removeDate={removeDate}
        isDateAvailable={isDateAvailable}
        title="The Edaward Cabin"
      />
      <div className="bg--light section ">
        <div className={`container flow-vert-lg`}>
          <div className={styles.imageCarousel}>
            <ImageCarousel propertyId={314113} />
          </div>
          <div ref={detailsRef}>
            <CabinDetails />
          </div>
        </div>
      </div>
      <section className="explore-section">
        <FadeInTransition>
          <div className={`container flow-vert explore`}>
            <p className="explore__main">The Edward Traveler’s Guide</p>
            <p>
              How do you best enjoy your time in Ontario’s gastronomical
              capital?
            </p>
            <a className="btn" href="/andlkdn">
              See our top picks
            </a>
          </div>
        </FadeInTransition>
      </section>
    </div>
  );
};

export default CabinPage;
