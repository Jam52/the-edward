import { addDate } from '../blockBookingCalendar';
import mockAvailabilityData from './mockAvailabilityData.json';
const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

describe('blockBookingCalendar', () => {
  test('resturns block of selected dates when a friday is selected', () => {
    const date = dayjs('2021-04-30');
    const selectedDates = addDate(date, 2, mockAvailabilityData);
    expect(selectedDates[1].diff(selectedDates[0], 'day')).toBe(2);
  });
  test('resturns block of selected dates when saturday is selected', () => {
    const date = dayjs('2021-05-01');
    const selectedDates = addDate(date, 2, mockAvailabilityData);
    expect(selectedDates[1].diff(selectedDates[0], 'day')).toBe(2);
  });
  test('resturns block of selected dates when a sunday is selected', () => {
    const date = dayjs('2021-05-02');
    const selectedDates = addDate(date, 2, mockAvailabilityData);
    expect(selectedDates[1].diff(selectedDates[0], 'day')).toBe(2);
  });
});
