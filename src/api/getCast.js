import axios from 'axios';

const requestParameters = {
  api_key: 'a54c3783addcfd6f83ea014e2d49ad26',
  language: 'en-US',
};

async function getCast(id) {
  const parameters = new URLSearchParams(requestParameters); // Отримує частину url з параметрами

  const response = await axios.get(`movie/${id}/credits?${parameters}`);

  // if (!response.data.cast.length) {
  //   return Promise.reject(new Error(`No cast for movie with id: ${id}!`));
  // }

  return response.data.cast;
}

export default getCast;
