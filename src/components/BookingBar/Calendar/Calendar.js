import React, { useState } from 'react';
import Backdrop from '../../Backdrop/Backdrop';
import styles from './Calendar.module.scss';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Spinner from '../../Spinner/Spinner';

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
    return props.isDateAvailable(date, props.unavailableDates);
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
    if (day.isSame(todaysDate, 'day')) {
      classes.push(styles.calendar_day__today);
    }
    if (
      !isDateAvailable(day) ||
      day.isBefore(todaysDate.add(1, 'day')) ||
      day.isAfter(todaysDate.add(props.bookingWindowDays, 'day'))
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
    <Aux>
      <div data-testid="component-calendar" className={styles.calendar}>
        {props.unavailableDates.length > 0 ? (
          <div className={styles.container}>
            <div className={styles.calendar_header}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/images/arrow.svg'}
                  data-testid="backward-one-month"
                  role="button"
                  aria-label="go back one month"
                  aria-disabled={
                    isNextMonthValidToDisplay('subtract') ? false : true
                  }
                  onClick={
                    isNextMonthValidToDisplay('subtract')
                      ? () => minusOneToDate('month')
                      : null
                  }
                  className="arrow"
                  alt=""
                />

                <p>{date.format('MMMM - YYYY')}</p>
                <img
                  data-testid="forward-one-month"
                  role="button"
                  aria-label="go forward one month"
                  aria-disabled={
                    isNextMonthValidToDisplay('add') ? false : true
                  }
                  onClick={
                    isNextMonthValidToDisplay('add')
                      ? () => plusOneToDate('month')
                      : null
                  }
                  className="arrow"
                  src={process.env.PUBLIC_URL + '/images/arrow.svg'}
                  alt=""
                  style={{ transform: 'rotate(-180deg)' }}
                ></img>
              </div>

              <svg
                onClick={props.close}
                height="1.5rem"
                viewBox="0 0 100 100"
                width="1.5rem"
                className={styles.calendar_close}
              >
                <line x1="0" x2="100" y1="0" y2="100" />
                <line x1="100" x2="0" y1="0" y2="100" />
              </svg>
            </div>

            <table className={styles.table}>
              <thead>
                <tr className={styles.table_weekdays}>
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
                  className={styles.clearDates_btn}
                  onClick={() => props.clear()}
                >
                  Clear Dates
                </button>
              ) : null}
            </div>
          </div>
        ) : (
          <div className={styles.container}>
            <Spinner />
          </div>
        )}
      </div>
      <Backdrop close={props.close} />
    </Aux>
  );
};

export default Calendar;
