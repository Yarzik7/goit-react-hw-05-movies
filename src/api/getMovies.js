import axios from 'axios';

const requestParameters = {
  api_key: 'a54c3783addcfd6f83ea014e2d49ad26',
  language: 'en-US',
  page: 1,
  query: '',
  include_adult: false,
};

async function getMovies(query, page = 1) {
  requestParameters.query = query;
  requestParameters.page = page;
  const parameters = new URLSearchParams(requestParameters); // Отримує частину url з параметрами

  const response = await axios.get(`search/movie?${parameters}`);

  if (!response.data.results.length) {
    return Promise.reject(new Error(`No movies by query: ${query}!`));
  }

  return response.data.results;
}

export default getMovies;
