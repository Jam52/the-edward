import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OverviewCard.module.scss';
import PropTypes from 'prop-types';

const OverviewCard = (props) => {
  return (
    <div
      data-testid="component-overview-card"
      className={
        props.isFlipped
          ? [styles.overview, styles.overview__left].join(' ')
          : styles.overview
      }
      id={`id${props.roomName}`}
      ref={props.refProp}
      tabIndex="-1"
    >
      <img
        src={props.img}
        alt={props.imgAlt}
        data-testid="image"
        className={styles.overview_img}
      />

      <div
        className={
          props.isFlipped
            ? `${styles.overview_info} ${styles.overview_info__right}`
            : styles.overview_info
        }
      >
        <h3 data-testid="room-name" className={styles.overview_header}>
          {props.roomName}
        </h3>
        <p data-testid="overview">{props.overview}</p>
        <h4>Max Occupancy</h4>
        <ul data-testid="occupancy" className={styles.overview_details}>
          {props.occupancy.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h4>Rate</h4>
        <p data-testid="rate" className={styles.overview_details}>
          {props.rate} <br />
          <span className={styles.smallPrint}>
            *Plus cleaning free and taxes
          </span>
        </p>

        <Link className="btn btn--med" to={props.to}>
          {props.roomName}
        </Link>
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
