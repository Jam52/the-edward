const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

export const addDate = (day, minimumStay, lodgifyAvailabilityData) => {
  let selectedDates = [];
  if (!isDateUnAvailable(day, lodgifyAvailabilityData)) {
    selectedDates.push(day);
  }
  if (!isDateUnAvailable(day.add(1, 'day'), lodgifyAvailabilityData)) {
    selectedDates.push(day.add(1, 'day'));
  }
  if (!isDateUnAvailable(day.add(2, 'day'), lodgifyAvailabilityData)) {
    selectedDates.push(day.add(2, 'day'));
  }
  if (!isDateUnAvailable(day.subtract(1, 'day'), lodgifyAvailabilityData)) {
    selectedDates.push(day.subtract(1, 'day'));
  }
  if (!isDateUnAvailable(day.subtract(2, 'day'), lodgifyAvailabilityData)) {
    selectedDates.push(day.subtract(2, 'day'));
  }

  const newDates = selectedDates.sort((a, b) => {
    if (a.isBefore(b)) {
      return -1;
    }
    if (b.isBefore(a)) {
      return 1;
    }
    return 0;
  });
  newDates.splice(1, 1);
  return newDates;
};

export const removeDate = () => {
  return [];
};

export const isDateUnAvailable = (date, lodifyData) => {
  const availableDates = lodifyData.filter(
    (bookingPeriod) => bookingPeriod.is_available,
  );
  return availableDates.every((booking) => {
    const startDate = dayjs(booking.period_start);
    const endDate = dayjs(booking.period_end);
    if (date.isSame(startDate, 'day') || date.isSame(endDate, 'day')) {
      return false;
    }
    if (date.isAfter(startDate, 'day') && date.isBefore(endDate, 'day')) {
      return false;
    }
    return true;
  });
};
