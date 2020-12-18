import React, { Component } from 'react';
import styles from './BookingBar.module.scss';
import Calendar from './Calendar/Calendar';
import Aux from '../../hoc/Auxillary/Auxillary';
import PropTypes from 'prop-types';
import axios from 'axios';
const dayjs = require('dayjs');

class BookingBar extends Component {
  state = {
    showCalendar: false,
    cost: this.props.cost,
    selectedDates: [],
    lodgifyData: [],
    loading: false,
  };

  async componentDidMount() {
    console.log(process.env.REACT_APP_LODGIFY_KEY);
    let data = await this.fetchLodgifyData();
    data = data.filter((booking) => !booking.is_available);
    this.setState({ lodgifyData: data, loading: false });
  }

  fetchLodgifyData = async () => {
    const currentDate = dayjs();
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://api.lodgify.com/v1/availability/${
      this.props.roomId
    }?periodStart=${currentDate.format(
      'YYYY-MM-DD',
    )}&periodEnd=${currentDate.add(2, 'year').format('YYYY-MM-DD')}`;

    this.setState({ loading: true });
    try {
      const lodgifyData = await axios.get(proxyurl + url, {
        headers: {
          'X-ApiKey': process.env.REACT_APP_LODGIFY_KEY,
        },
      });
      return await lodgifyData.data;
    } catch (error) {
      this.setState({ loading: 'error' });
      console.log(error);
    }
  };

  addDate = (day) => {
    if (this.state.selectedDates.length < 2) {
      this.setState({
        selectedDates: [...this.state.selectedDates, day].sort((a, b) => {
          if (a.isBefore(b)) {
            return -1;
          }
          if (b.isBefore(a)) {
            return 11;
          }
          return 0;
        }),
      });
    }
  };

  removeDate = (day) => {
    const newSelectedDates = this.state.selectedDates.filter((date) => {
      return !date.isSame(day, 'D');
    });
    this.setState({ selectedDates: newSelectedDates });
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
            close={() => this.setState({ showCalendar: false })}
            addDate={this.addDate}
            selectedDates={this.state.selectedDates}
            remove={this.removeDate}
          />
        ) : null}
        <div data-testid="component-booking-bar" className={styles.bookingbar}>
          <div className={`page_container ${styles.bookingbar_container}`}>
            <h2>The Edaward House</h2>
            <p className={styles.bookingbar_cost}>{this.state.cost}</p>
            <div
              className={styles.bookingbar_dates}
              onClick={() => this.setState({ showCalendar: true })}
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
                enable-background="new 0 0 150 50"
              >
                <g>
                  <line
                    stroke="#000000"
                    stroke-width="6"
                    stroke-miterlimit="10"
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
              <button
                className="btn btn--light"
                onClick={() => this.setState({ showCalendar: true })}
              >
                Book Now
              </button>
            ) : (
              <button
                className="btn btn--light"
                onClick={() => this.setState({ showCalendar: true })}
              >
                Check Availability
              </button>
            )}
          </div>
        </div>
      </Aux>
    );
  }
}

BookingBar.protoTypes = {
  roomId: PropTypes.number.isRequired,
};

export default BookingBar;
