import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './OverviewCard.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const OverviewCard = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [isHiddenLeft, setHiddenLeft] = useState(styles.hidden_left);
  const [isHiddenRight, setHiddenRight] = useState(styles.hidden_right);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setHiddenLeft([styles.hidden_left, styles.slide].join(' '));
        setHiddenRight([styles.hidden_right, styles.slide].join(' '));
      }, props.delay);
    }
  });

  return (
    <div
      ref={ref}
      data-testid="component-overview-card"
      className={
        props.isFlipped
          ? [styles.overview, styles.overview__left].join(' ')
          : styles.overview
      }
    >
      <div
        className={[
          styles.overview_img,
          props.isFlipped ? isHiddenRight : isHiddenLeft,
        ].join(' ')}
      >
        <img src={props.img} alt={props.imgAlt} data-testid="image" />
      </div>
      <div
        className={
          props.isFlipped
            ? [
                styles.overview_info,
                styles.overview_info__right,
                isHiddenRight,
              ].join(' ')
            : [styles.overview_info, isHiddenLeft].join(' ')
        }
      >
        <h3 data-testid="room-name" className={styles.overview_header}>
          {props.roomName}
        </h3>
        <p data-testid="overview">{props.overview}</p>
        <h4>Max Occupancy</h4>
        <ul data-testid="occupancy" className={styles.overview_occupancy}>
          {props.occupancy.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h4>Rate</h4>
        <p data-testid="rate">{props.rate}</p>
        <Button text={`Book ${props.roomName}`} to={props.to} />
      </div>
    </div>
  );
};

OverviewCard.propTypes = {
  img: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  roomName: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  occupancy: PropTypes.array.isRequired,
  rate: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default OverviewCard;
