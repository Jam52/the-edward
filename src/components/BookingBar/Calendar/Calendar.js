import React, { useState } from 'react';
import styles from './Calendar.module.scss';
const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const Calendar = (props) => {
  const todaysDate = props.todaysDate;
  const [date, changeDate] = useState(todaysDate);

  const plusOneToDate = (amount) => {
    changeDate(date.add(1, amount));
  };
  const minusOneToDate = (amount) => {
    changeDate(date.subtract(1, amount));
  };

  const isDateAvailable = (date) => {
    return props.unavailableDates.every((booking) => {
      const startDate = dayjs(booking.period_start).subtract(
        props.prepDays,
        'day',
      );
      const endDate = dayjs(booking.period_end).add(props.prepDays, 'day');
      if (date.isSame(startDate, 'day') || date.isSame(endDate, 'day')) {
        return false;
      }
      if (date.isAfter(startDate, 'day') && date.isBefore(endDate, 'day')) {
        return false;
      }
      return true;
    });
  };

  let firstDayOfMonth = Number(date.date(1).format('d'));
  let numDaysInMonth = date.daysInMonth();

  let daysInMonth = [...Array(42).keys()].map((key) => {
    key = key - firstDayOfMonth;
    let day = date.date(1).add(key, 'day');
    let classes = [styles.calendar_day];
    let click = (day) => props.addDate(day);
    if (key + 1 <= 0) {
      classes.push(styles.calendar_day__other);
      day = date.date(1).subtract(Math.abs(key), 'day');
    }
    if (key + 1 > numDaysInMonth) {
      classes.push(styles.calendar_day__other);
    }
    if (day.isSame(todaysDate)) {
      console.log('today', day);
      classes.push(styles.calendar_day__today);
    }
    if (
      !isDateAvailable(day) ||
      day.isBefore(dayjs().add(1, 'day')) ||
      day.isAfter(dayjs().add(props.bookingWindowDays, 'day'))
    ) {
      classes.push(styles.calendar_day__booked);
      click = () => console.log('nothing');
    } else {
      if (props.selectedDates.length > 0) {
        if (props.selectedDates.some((date) => day.isSame(date, 'D'))) {
          click = (day) => props.remove(day);
          classes.push(styles.calendar_day__selected);
        }
        if (props.selectedDates.length === 2) {
          if (
            day.isAfter(props.selectedDates[0], 'D') &&
            day.isBefore(props.selectedDates[1], 'D')
          ) {
            click = () => console.log('nothing');
            classes.push(styles.calendar_day__inbetween);
          }
        }
      }
    }

    return (
      <td
        data-testid="day"
        className={classes.join(' ')}
        key={key}
        onClick={() => click(day)}
      >
        {day.date()}
      </td>
    );
  });

  const isNextMonthValidToDisplay = (value) => {
    const nextMonth =
      value === 'add' ? date.add(1, 'month') : date.subtract(1, 'month');
    if (
      nextMonth.isBefore(todaysDate, 'month') ||
      nextMonth.isAfter(todaysDate.add(props.bookingWindowDays, 'day'))
    ) {
      return false;
    }
    return true;
  };

  return (
    <div data-testid="component-calendar" className={styles.calendar}>
      <div className={styles.container}>
        <div className={styles.calendar_header}>
          <div>
            <img
              data-testid="backward-one-month"
              role="button"
              aria-label="go back one month"
              onClick={
                isNextMonthValidToDisplay('subtract')
                  ? () => minusOneToDate('month')
                  : null
              }
              className={
                isNextMonthValidToDisplay('subtract')
                  ? styles.calendar_arrow
                  : `${styles.calendar_arrow} ${styles.calendar_arrow__unavailable}`
              }
              src={process.env.PUBLIC_URL + '/images/arrow.png'}
              alt=""
              style={{ transform: 'rotate(90deg)' }}
            />
            <div>{date.format('MMMM - YYYY')}</div>
            <img
              data-testid="forward-one-month"
              role="button"
              aria-label="go forward one month"
              onClick={
                isNextMonthValidToDisplay('add')
                  ? () => plusOneToDate('month')
                  : null
              }
              className={
                isNextMonthValidToDisplay('add')
                  ? styles.calendar_arrow
                  : `${styles.calendar_arrow} ${styles.calendar_arrow__unavailable}`
              }
              src={process.env.PUBLIC_URL + '/images/arrow.png'}
              alt=""
              style={{ transform: 'rotate(-90deg)' }}
            />
          </div>

          <svg
            onClick={props.close}
            height="2rem"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="2rem"
            className={styles.calendar_close}
          >
            <path
              style={{ fill: 'white', cursor: 'pointer' }}
              d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
            />
          </svg>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>sun</th>
              <th>mon</th>
              <th>tue</th>
              <th>wed</th>
              <th>thu</th>
              <th>fri</th>
              <th>sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>{daysInMonth.slice(0, 7)}</tr>
            <tr>{daysInMonth.slice(7, 14)}</tr>
            <tr>{daysInMonth.slice(14, 21)}</tr>
            <tr>{daysInMonth.slice(21, 28)}</tr>
            <tr>{daysInMonth.slice(28, 35)}</tr>
            <tr>{daysInMonth.slice(35, 42)}</tr>
          </tbody>
        </table>
        <div className={styles.clearDates}>
          {props.selectedDates.length > 0 ? (
            <button
              className="btn btn--dark btn--small"
              onClick={() => props.clear()}
            >
              Clear Dates
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Calendar;