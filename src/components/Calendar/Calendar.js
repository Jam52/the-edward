import React, { useState } from 'react';
import DayJS from 'react-dayjs';
import styles from './Calendar.module.scss';
const dayjs = require('dayjs');

const Calendar = (props) => {
  const todaysDate = dayjs();
  const [date, changeDate] = useState(todaysDate);

  const plusOneToDate = (amount) => {
    changeDate(date.add(1, amount));
  };
  const minusOneToDate = (amount) => {
    changeDate(date.subtract(1, amount));
  };

  let firstDayOfMonth = Number(date.date(1).format('d'));
  let numDaysInMonth = date.daysInMonth();

  let daysInMonth = Array(42).fill(null);
  let count = 0;
  for (let i = firstDayOfMonth; count < numDaysInMonth; i++) {
    daysInMonth[i] = date.date(1).add(count, 'day');
    count++;
  }

  daysInMonth = daysInMonth.map((day) => {
    if (day !== null) {
      return <td className={styles.calendar_day}>{day.date()}</td>;
    }
    return (
      <td
        className={`${styles.calendar_day__unavailable} ${styles.calendar_day}`}
      >
        _
      </td>
    );
  });

  console.log(firstDayOfMonth, numDaysInMonth, daysInMonth);

  return (
    <div data-testid="component-calendar" className={styles.calendar}>
      <div className={styles.container}>
        <div className={styles.calendar_header}>
          <div>
            <img
              role="button"
              aria-label="go back one month"
              onClick={() => minusOneToDate('month')}
              className={styles.calendar_arrow}
              src={process.env.PUBLIC_URL + '/images/arrow.png'}
              alt=""
              style={{ transform: 'rotate(90deg)' }}
            />
            <div>{date.format('MMM')}</div>
            <img
              role="button"
              aria-label="go forward one month"
              onClick={() => plusOneToDate('month')}
              className={styles.calendar_arrow}
              src={process.env.PUBLIC_URL + '/images/arrow.png'}
              alt=""
              style={{ transform: 'rotate(-90deg)' }}
            />
          </div>
          <div>
            <img
              role="button"
              aria-label="go back one year"
              onClick={() => minusOneToDate('year')}
              className={styles.calendar_arrow}
              src={process.env.PUBLIC_URL + '/images/arrow.png'}
              alt=""
              style={{ transform: 'rotate(90deg)' }}
            />

            <div>{date.format('YYYY')}</div>

            <img
              role="button"
              aria-label="go forward one year"
              onClick={() => plusOneToDate('year')}
              className={styles.calendar_arrow}
              src={process.env.PUBLIC_URL + '/images/arrow.png'}
              alt=""
              style={{ transform: 'rotate(-90deg)' }}
            />
          </div>
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
      </div>
    </div>
  );
};

export default Calendar;
