import axios from 'axios';
const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const proxyurl = 'https://corsproxy.io/?';

export const fetchLodgifyRatesData = async (propertyId, roomTypeId) => {
  const currentDate = dayjs().format('YYYY-MM-DD');
  const url = `https://api.lodgify.com/v2/rates/calendar?HouseId=${propertyId}&RoomTypeId=${roomTypeId}&StartDate=${currentDate}&EndDate=${currentDate}`;
  try {
    const apiData = await axios.get(proxyurl + url, {
      headers: {
        'X-ApiKey': process.env.REACT_APP_LODGIFY_KEY,
      },
    });
    return await apiData.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLodgifyAvailabilityData = async (propertyId) => {
  const currentDate = dayjs();
  const url = `https://api.lodgify.com/v1/availability/${propertyId}?periodStart=${currentDate.format(
    'YYYY-MM-DD',
  )}&periodEnd=${currentDate.add(2, 'year').format('YYYY-MM-DD')}`;

  try {
    let apiData = await axios.get(proxyurl + url, {
      headers: {
        'X-ApiKey': process.env.REACT_APP_LODGIFY_KEY,
      },
    });
    return apiData.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLodgifyImages = async (propertyId) => {
  const url = `https://api.lodgify.com/v2/properties/${propertyId}/rooms`;

  try {
    let imageData = await axios.get(proxyurl + url, {
      headers: {
        'X-ApiKey': process.env.REACT_APP_LODGIFY_KEY,
      },
    });
    return await imageData.data[0].images;
  } catch (error) {
    console.log(error);
  }
};
