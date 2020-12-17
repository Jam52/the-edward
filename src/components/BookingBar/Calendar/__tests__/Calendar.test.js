import { cleanup, fireEvent, render } from '@testing-library/react';
import '../Calendar';
import Calendar from '../Calendar';
const dayjs = require('dayjs');

describe('Calendar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<Calendar />);
  });
  afterEach(() => {
    cleanup();
  });

  test('renders w/ error', () => {
    expect(wrapper.getByTestId('component-calendar')).toBeInTheDocument();
  });

  test('shows todays month', () => {
    const month = dayjs().format('MMM');
    expect(wrapper.getByText(month)).toBeInTheDocument();
  });

  test('clicking forward one month changes the month', () => {
    const month = dayjs().add(1, 'month').format('MMM');
    const forward = wrapper.getByTestId('forward-one-month');
    fireEvent.click(forward);
    expect(wrapper.getByText(month)).toBeInTheDocument();
  });

  test('clicking backward one month changes the month', () => {
    const month = dayjs().subtract(1, 'month').format('MMM');
    const forward = wrapper.getByTestId('backward-one-month');
    fireEvent.click(forward);
    expect(wrapper.getByText(month)).toBeInTheDocument();
  });

  test('clicking forward one year changes the year', () => {
    const year = dayjs().add(1, 'year').format('YYYY');
    const forward = wrapper.getByTestId('forward-one-year');
    fireEvent.click(forward);
    expect(wrapper.getByText(year)).toBeInTheDocument();
  });

  test('clicking backward year month changes the year', () => {
    const year = dayjs().subtract(1, 'year').format('MMM');
    const backward = wrapper.getByTestId('backward-one-year');
    fireEvent.click(backward);
    expect(wrapper.getByText(year)).toBeInTheDocument();
  });

  test('1st of the month is under the correct day', () => {
    const firstDayOfMonth = dayjs().date(1).format('d');
    const dayCells = wrapper.getAllByTestId('day');
    expect(dayCells[firstDayOfMonth].textContent).toBe('1');
  });
});
