import { cleanup, fireEvent, render } from '@testing-library/react';
import '../Calendar';
import Calendar from '../Calendar';
import mockAvailabilityData from './mockAvailabilityData.json';
import { isDateUnAvailable } from '../../../../services/calendarLogic/multiDayBookingCalendar';
const dayjs = require('dayjs');

describe('Calendar', () => {
  let wrapper;
  const currentDate = dayjs('2020-12-05');
  beforeEach(() => {
    wrapper = render(
      <Calendar
        selectedDates={[]}
        lodgifyData={mockAvailabilityData}
        bookingWindowDays={60}
        todaysDate={currentDate}
        minimumStay={2}
        isDateUnAvailable={isDateUnAvailable}
      />,
    );
  });
  afterEach(() => {
    cleanup();
  });

  test('renders w/ error', () => {
    expect(wrapper.getByTestId('component-calendar')).toBeInTheDocument();
  });

  test('shows todays month and year', () => {
    const month = currentDate.format('MMMM - YYYY');
    expect(wrapper.getByText(month)).toBeInTheDocument();
  });

  test('1st of the month is under the correct day', () => {
    const firstDayOfMonth = currentDate.date(1).format('d');
    const dayCells = wrapper.getAllByTestId('day');
    expect(dayCells[firstDayOfMonth].textContent).toBe('1');
  });

  test('clicking forward one month changes the month', () => {
    const dateDisplayed = currentDate.add(1, 'month').format('MMMM - YYYY');
    const forward = wrapper.getByTestId('forward-one-month');
    fireEvent.click(forward);
    expect(wrapper.getByText(dateDisplayed)).toBeInTheDocument();
  });

  test('clicking back does not move backward before todays month', () => {
    const month = currentDate.format('MMMM - YYYY');
    const backward = wrapper.getByTestId('backward-one-month');
    fireEvent.click(backward);
    expect(wrapper.getByText(month)).toBeInTheDocument();
  });

  describe('when month shown is last available booking month', () => {
    test('clicking forward beyond booking window days does not move calendar forwards', () => {
      const forward = wrapper.getByTestId('forward-one-month');
      fireEvent.click(forward);
      fireEvent.click(forward);
      const month = currentDate.add(1, 'month').format('MMMM - YYYY');
      expect(wrapper.getByText(month)).toBeInTheDocument();
    });
    test('clicking backwards returns to previouse month', () => {
      const forward = wrapper.getByTestId('forward-one-month');
      fireEvent.click(forward);
      const backward = wrapper.getByTestId('backward-one-month');
      fireEvent.click(backward);
      const month = currentDate.format('MMMM - YYYY');
      expect(wrapper.getByText(month)).toBeInTheDocument();
    });
  });
});
