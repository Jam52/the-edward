import React, { useEffect, useState, useRef } from 'react';
import ImageContainer from '../../../components/ImageContainer/ImageContainer';
import HouseDetails from './houseDetails';
import BookingBar from '../../../components/BookingBar/BookingBar';
import { useInView } from 'react-intersection-observer';
import {
  addDate,
  removeDate,
  isDateUnAvailable,
} from '../../../services/calendarLogic/multiDayBookingCalendar';
import FadeInTransition from '../../../components/FadeInTransition/FadeInTransition';
import styles from '../RoomsPage.module.scss';
import ImageCarousel from '../../../components/ImageCarousel/ImageCarousel';

const HousePage = () => {
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
          image={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
          alt="Beautiful house interior, fresh white walls, dark stained funiture."
        />
        <FadeInTransition>
          <div className="split">
            <div className="flow-vert">
              <h2>Welcome to your home away from home.</h2>
              <div className={styles.overview_details}>
                <h3 className="h4">Max Occupancy</h3>
                <ul>
                  <li>6 Adults</li>
                  <li>3 Children under 10</li>
                </ul>
                <h3 className="h4">Rate</h3>
                <ul>
                  <li>$675 per night</li>
                  <li>+ $250 One-time Cleaning Fee</li>
                  <li>+ Taxes (13% HST and 4% MAT)</li>
                </ul>
              </div>
            </div>
            <div className="flow-vert">
              <p>
                With 24ft high atrium ceilings and three grand suites, this
                light filled two-story house is ideal for families or a group of
                friends looking for a peaceful getaway. Much love, creativity
                and attention to detail has gone into curating a space that
                balances classic and contemporary design and that our guests can
                call home.
              </p>
              <button
                className="internal-link"
                aria-label="scroll to loft overview"
                onClick={() => exicuteScrollTo(detailsRef)}
              >
                See House Details
              </button>
            </div>
          </div>
        </FadeInTransition>
      </div>
      <div ref={ref}></div>
      <BookingBar
        propertyId={309275}
        roomTypeId={374215}
        show={showBooking}
        addDate={addDate}
        removeDate={removeDate}
        isDateUnAvailable={isDateUnAvailable}
        title="The Edaward House"
      />
      <div className="bg--light section ">
        <div className={`container flow-vert-lg`}>
          <div className={styles.imageCarousel}>
            <ImageCarousel propertyId={309275} />
          </div>
          <div ref={detailsRef}>
            <HouseDetails />
          </div>
        </div>
      </div>
      <section className="explore-section">
        <FadeInTransition>
          <div className={`container flow-vert explore`}>
            <p>The Edward Traveler’s Guide</p>
            <p className="explore__main">
              How to best enjoy your time in Ontario’s gastronomical capital.
            </p>
            <p className="btn btn--disabled">Comming Soon</p>
          </div>
        </FadeInTransition>
      </section>
    </div>
  );
};

export default HousePage;
