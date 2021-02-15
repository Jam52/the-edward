const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

export const addDate = (
  day,
  minimumStay,
  lodgifyAvailabilityData,
  selectedDates,
) => {
  if (selectedDates.length === 0) {
    return [day];
  }
  if (selectedDates.length === 1) {
    const newDates = [...selectedDates, day].sort((a, b) => {
      if (a.isBefore(b)) {
        return -1;
      }
      if (b.isBefore(a)) {
        return 1;
      }
      return 0;
    });
    if (
      !areBothDatesInsideAvailableBookingPeriod(
        newDates,
        lodgifyAvailabilityData,
      )
    ) {
      alert('Booking must be continuous.');
      return null;
    } else if (isLessThanMinimumDays(newDates, minimumStay)) {
      alert(`Minimum stay of ${minimumStay} nights.`);
      return null;
    } else {
      return newDates;
    }
  }
};

const isLessThanMinimumDays = (newDates, minimumStay) => {
  if (newDates[1].diff(newDates[0], 'day') < minimumStay) {
    return true;
  }
  return false;
};

const areBothDatesInsideAvailableBookingPeriod = (
  newDates,
  lodgifyAvailabilityData,
) => {
  let availablePeriods = lodgifyAvailabilityData.filter(
    (period) => period.is_available,
  );

  if (
    availablePeriods.some((period) => {
      return (
        dayjs(period.period_start)
          .subtract(1, 'day')
          .isBefore(newDates[0], 'day') &&
        dayjs(period.period_end).add(2, 'day').isAfter(newDates[1], ' day')
      );
    })
  ) {
    return true;
  }
  return false;
};

export const removeDate = (day, selectedDates) => {
  const newSelectedDates = selectedDates.filter((date) => {
    return !date.isSame(day, 'D');
  });
  return newSelectedDates;
};

export const isDateUnAvailable = (date, lodifyData) => {
  const availableDates = lodifyData.filter(
    (bookingPeriod) => bookingPeriod.is_available,
  );
  return availableDates.every((booking) => {
    const startDate = dayjs(booking.period_start);
    const endDate = dayjs(booking.period_end).add(1, 'day');
    if (date.isSame(startDate, 'day') || date.isSame(endDate, 'day')) {
      return false;
    }
    if (date.isAfter(startDate, 'day') && date.isBefore(endDate, 'day')) {
      return false;
    }
    return true;
  });
};
