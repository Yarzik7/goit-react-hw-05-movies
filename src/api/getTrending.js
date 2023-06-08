import axios from 'axios';

const requestParameters = {
  api_key: 'a54c3783addcfd6f83ea014e2d49ad26',
};

const baseURL = 'https://api.themoviedb.org/3/';

async function getTrending() {
  const parameters = new URLSearchParams(requestParameters); // Отримує частину url з параметрами

  const response = await axios.get(`${baseURL}trending/all/day?${parameters}`);

  return response.data.results;
}

export default getTrending;
