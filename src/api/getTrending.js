import axios from 'axios';

const requestParameters = {
  api_key: 'a54c3783addcfd6f83ea014e2d49ad26',
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

async function getTrending() {
  const parameters = new URLSearchParams(requestParameters); // Отримує частину url з параметрами

  const response = await axios.get(`trending/all/day?${parameters}`);

  if (!response.data.results.length) {
    return Promise.reject(new Error(`No trending movies today!`));
  }

  return response.data.results;
}

export default getTrending;
