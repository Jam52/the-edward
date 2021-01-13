const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

export const addDate = (day, minimumStay, lodgifyAvailabilityData) => {
  let selectedDates = [];
  if (isDateAvailable(day, lodgifyAvailabilityData)) {
    selectedDates.push(day);
  }
  if (isDateAvailable(day.add(1, 'day'), lodgifyAvailabilityData)) {
    selectedDates.push(day.add(1, 'day'));
  }
  if (isDateAvailable(day.add(2, 'day'), lodgifyAvailabilityData)) {
    selectedDates.push(day.add(2, 'day'));
  }
  if (isDateAvailable(day.subtract(1, 'day'), lodgifyAvailabilityData)) {
    selectedDates.push(day.subtract(1, 'day'));
  }
  if (isDateAvailable(day.subtract(2, 'day'), lodgifyAvailabilityData)) {
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

export const isDateAvailable = (date, unavailableDates) => {
  return unavailableDates.every((booking) => {
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
