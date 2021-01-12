import {
  addDate,
  isDateAvailable,
  removeDate,
} from '../multiDayBookingCalendar';
import mockAvailabilityData from './mockAvailabilityData.json';
const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

describe('multiDayBookingCalendar', () => {
  describe('addDate', () => {
    describe('when no dates are selected', () => {
      test('returns selected date in an array', () => {
        const date = dayjs('2021-04-30');
        expect(addDate(date, 2, mockAvailabilityData, [])).toHaveLength(1);
      });
    });
    describe('when one date is already selected', () => {
      test('date is less than minimum number of nights returns null', () => {
        const firstSelectedDate = dayjs('2021-04-30');
        const secondSelectedDate = dayjs('2021-05-01');
        expect(
          addDate(secondSelectedDate, 2, mockAvailabilityData, [
            firstSelectedDate,
          ]),
        ).toBe(null);
      });
      test('date is more than minimum number of nights returns same unchanged array', () => {
        const firstSelectedDate = dayjs('2021-04-30');
        const secondSelectedDate = dayjs('2021-05-02');
        expect(
          addDate(secondSelectedDate, 2, mockAvailabilityData, [
            firstSelectedDate,
          ]),
        ).toHaveLength(2);
      });
      test('dates have booking inbetween', () => {
        const firstSelectedDate = dayjs('2021-04-30');
        const secondSelectedDate = dayjs('2021-05-08');
        expect(
          addDate(secondSelectedDate, 2, mockAvailabilityData, [
            firstSelectedDate,
          ]),
        ).toBe(null);
      });
    });
  });
  describe('isDateAvailable', () => {
    test('returns true for available date', () => {
      const date = dayjs('2021-04-30');
      expect(isDateAvailable(date, mockAvailabilityData)).toBeTruthy();
    });
    test('returns false for unavailable date', () => {
      const date = dayjs('2021-04-29');
      expect(isDateAvailable(date, mockAvailabilityData)).toBeFalsy();
    });
  });
  describe('removeDate', () => {
    describe('with one selected date', () => {
      test('returns empty array', () => {
        const date = dayjs('2021-04-09');
        expect(removeDate(date, [date])).toEqual([]);
      });
    });
    describe('with two selected dates', () => {
      test('returns a single date', () => {
        const dateOne = dayjs('2021-04-09');
        const dateTwo = dayjs('2021-05-02');
        expect(removeDate(dateOne, [dateOne, dateTwo])).toEqual([dateTwo]);
      });
    });
  });
});
