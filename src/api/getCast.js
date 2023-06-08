import axios from 'axios';

const requestParameters = {
  api_key: 'a54c3783addcfd6f83ea014e2d49ad26',
  language: 'en-US',
};

const baseURL = 'https://api.themoviedb.org/3/';

async function getCast(id) {
  const parameters = new URLSearchParams(requestParameters); // Отримує частину url з параметрами

  const response = await axios.get(`${baseURL}movie/${id}/credits?${parameters}`);

  return response.data.cast;
}

export default getCast;
