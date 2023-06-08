import axios from 'axios';

const requestParameters = {
  api_key: 'a54c3783addcfd6f83ea014e2d49ad26',
  language: 'en-US',
  page: 1,
};

const baseURL = 'https://api.themoviedb.org/3/';

async function getReviews(id, page = 1) {
  requestParameters.page = page;
  const parameters = new URLSearchParams(requestParameters); // Отримує частину url з параметрами

  const response = await axios.get(`${baseURL}movie/${id}/reviews?${parameters}`);

  return response.data.results;
}

export default getReviews;
