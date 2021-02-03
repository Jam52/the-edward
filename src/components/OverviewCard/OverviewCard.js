import React from 'react';
import styles from './OverviewCard.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

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
      <div className={styles.overview_img}>
        <img src={props.img} alt={props.imgAlt} data-testid="image" />
      </div>
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
        <ul data-testid="occupancy" className={styles.overview_occupancy}>
          {props.occupancy.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h4>Rate</h4>
        <p data-testid="rate">
          {props.rate} <br />
          <span className={styles.smallPrint}>
            *Cleaning fees and taxes are applied at checkout
          </span>
        </p>

        <Button text={`See ${props.roomName}`} to={props.to} />
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
