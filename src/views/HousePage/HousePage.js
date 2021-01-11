import React, { useEffect, useState } from 'react';
import Summary from './Summary';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import Carosoul from './carosoul';
import HouseDetails from './houseDetails';
import Availability from './availability';
import BookingBar from '../../components/BookingBar/BookingBar';
import { useInView } from 'react-intersection-observer';
import {
  addDate,
  removeDate,
  isDateAvailable,
} from '../../services/calendarLogic/multiDayBookingCalendar';

// import styles from './HousePage.module.scss';

const HousePage = () => {
  //auto scrolls to the top of the page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showBooking, setBooking] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '300px',
  });

  useEffect(() => {
    if (inView) {
      console.log('in view');
      setTimeout(() => {
        setBooking(true);
      }, 0);
    }
  }, [inView]);

  return (
    <div data-testid="component-house-page">
      <ImageContainer
        landscapeSrc={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
        portraitSrc={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
        alt="Yellow house under bright blue sky"
      />

      <Summary />
      <div ref={ref}></div>

      <BookingBar
        cost={'From $675/night'}
        propertyId={309275}
        roomTypeId={374215}
        show={showBooking}
        addDate={addDate}
        removeDate={removeDate}
        isDateAvailable={isDateAvailable}
      />

      <Carosoul />
      <HouseDetails />
      <Availability />
    </div>
  );
};

export default HousePage;
