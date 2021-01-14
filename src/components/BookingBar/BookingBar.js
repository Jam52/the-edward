import React, { Component } from 'react';
import styles from './BookingBar.module.scss';
import Calendar from './Calendar/Calendar';
import Aux from '../../hoc/Auxillary/Auxillary';
import PropTypes from 'prop-types';
import {
  fetchLodgifyRatesData,
  fetchLodgifyAvailabilityData,
} from '../../services/lodgifyApi/lodgifyApi';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

class BookingBar extends Component {
  state = {
    showCalendar: false,
    cost: this.props.cost,
    selectedDates: [],
    lodgifyAvailabilityData: [],
    minimumStay: 0,
    bookingWindowDays: 0,
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      let availabilityData = await fetchLodgifyAvailabilityData(
        this.props.propertyId,
      );
      let rateData = await fetchLodgifyRatesData(
        this.props.propertyId,
        this.props.roomTypeId,
      );

      const bookingWindowDays = rateData.rate_settings.booking_window_days;
      const prepDays = rateData.rate_settings.preparation_time_days;
      const minimumStay = rateData.calendar_items[0].prices[0].min_stay;

      this.setState({
        lodgifyAvailabilityData: availabilityData,
        minimumStay,
        bookingWindowDays,
        prepDays,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  addDate = (day) => {
    const newDates = this.props.addDate(
      day,
      this.state.minimumStay,
      this.state.lodgifyAvailabilityData,
      this.state.selectedDates,
    );
    console.log(newDates);
    if (newDates) {
      this.setState({
        selectedDates: newDates,
      });
    }
  };

  removeDate = (day) => {
    const newSelectedDates = this.props.removeDate(
      day,
      this.state.selectedDates,
    );
    this.setState({ selectedDates: newSelectedDates });
  };

  showCalendar = () => {
    disableBodyScroll(Calendar);
    this.setState({ showCalendar: true });
  };
  hideCalendar = () => {
    enableBodyScroll(Calendar);
    this.setState({ showCalendar: false });
  };

  render() {
    let orderedDates = ['Arrival', 'Departure'];
    if (this.state.selectedDates.length === 1) {
      orderedDates[0] = this.state.selectedDates[0].format('MMM-DD');
    }
    if (this.state.selectedDates.length === 2) {
      orderedDates = this.state.selectedDates.map((date) =>
        date.format('MMM-DD'),
      );
    }
    return (
      <Aux>
        {this.state.showCalendar ? (
          <Calendar
            ref={this.targetRef}
            close={this.hideCalendar}
            addDate={this.addDate}
            selectedDates={this.state.selectedDates}
            remove={this.removeDate}
            unavailableDates={this.state.lodgifyAvailabilityData}
            bookingWindowDays={this.state.bookingWindowDays}
            minimumStay={this.state.minimumStay}
            prepDays={this.state.prepDays}
            todaysDate={dayjs()}
            clear={() => this.setState({ selectedDates: [] })}
            isDateAvailable={this.props.isDateAvailable}
          />
        ) : null}
        <div
          data-testid="component-booking-bar"
          className={`${styles.bookingbar} ${
            this.props.show ? `${styles.hidden} ${styles.show}` : styles.hidden
          }`}
        >
          <div className={`container ${styles.bookingbar_container}`}>
            <h2>{this.props.title}</h2>
            <p className={styles.bookingbar_cost}>{this.state.cost}</p>
            <div
              className={styles.bookingbar_dates}
              onClick={this.showCalendar}
            >
              <img
                src={process.env.PUBLIC_URL + '/images/calendar.png'}
                alt="calendar"
              />
              <p>{orderedDates[0]}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="3rem"
                height="1rem"
                viewBox="0 0 150 50"
                enableBackground="new 0 0 150 50"
              >
                <g>
                  <line
                    stroke="#000000"
                    strokeWidth="6"
                    strokeMiterlimit="10"
                    x1="1.266"
                    y1="24.704"
                    x2="125.302"
                    y2="24.704"
                  />
                  <polygon points="124.396,6.284 124.396,44.606 148.349,23.69  " />
                </g>
              </svg>
              <p>{orderedDates[1]}</p>
            </div>
            {this.state.selectedDates.length === 2 ? (
              <a
                className={`btn btn--light ${styles.booknow} ${styles.button}`}
                href={`https://checkout.lodgify.com/payam-shalchian/en/?currency=CAD#/${
                  this.props.propertyId
                }/${this.state.selectedDates[0].format(
                  'YYYYMMDD',
                )},${this.state.selectedDates[1].format('YYYYMMDD')},1/-`}
              >
                Book Now
              </a>
            ) : (
              <button
                className={`btn ${styles.button}`}
                onClick={
                  !this.state.showCalendar
                    ? this.showCalendar
                    : this.hideCalendar
                }
              >
                {this.state.showCalendar ? 'Close' : 'Availability'}
              </button>
            )}
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
