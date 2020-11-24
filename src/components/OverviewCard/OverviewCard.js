import React from 'react';
import styles from './OverviewCard.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const OverviewCard = (props) => {
  return (
    <div data-testid="component-overview-card" className={styles.overview}>
      <div>
        <h3 data-testid="room-name" className={styles.overview_header}>
          {props.roomName}
        </h3>
        <div className={styles.overview_img}>
          <img src={props.img} alt={props.imgAlt} data-testid="image" />
        </div>

        <p data-testid="overview">{props.overview}</p>
        <h4>Occupancy</h4>
        <ul data-testid="occupancy" className={styles.occupancy}>
          {props.occupancy.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h4>Rate</h4>
        <p data-testid="rate">{props.rate}</p>
      </div>
      <Button text={`Book ${props.roomName}`} />
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
};

export default OverviewCard;
