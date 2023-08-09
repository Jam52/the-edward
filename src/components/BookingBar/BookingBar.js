import React, { Component } from 'react';
import styles from './BookingBar.module.scss';
import Aux from '../../hoc/Auxillary/Auxillary';
import PropTypes from 'prop-types';
const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

class BookingBar extends Component {

  render() {
    return (
      <Aux>
        <div
          data-testid="component-booking-bar"
          className={`${styles.bookingbar} ${
            this.props.show ? `${styles.hidden} ${styles.show}` : styles.hidden
          }`}
        >
          <div className={`container ${styles.bookingbar_container}`}>
            <h2>{this.props.title}</h2>
            <a
                className={`btn  ${styles.booknow} ${styles.button} split`}
                href={this.props.bookingUrl}
                target="_blank"
                rel='noreferrer noopener'
            >
                Book Now
                <img class="btn-icon" src={process.env.PUBLIC_URL + '/images/external-link.png'}></img>
              </a>
          </div>
        </div>
      </Aux>
    );
  }
}

BookingBar.protoTypes = {
  propertyId: PropTypes.number.isRequired,
  roomTypeId: PropTypes.number.isRequired,
  addDate: PropTypes.func.isRequired,
  removeDate: PropTypes.func.isRequired,
  isDateAvailable: PropTypes.func.isRequired,
};

export default BookingBar;
