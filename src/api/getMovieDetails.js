import axios from 'axios';

const requestParameters = {
  api_key: 'a54c3783addcfd6f83ea014e2d49ad26',
  language: 'en-US',
};

const baseURL = 'https://api.themoviedb.org/3/';

async function getMovieDetails(id) {
  const parameters = new URLSearchParams(requestParameters); // Отримує частину url з параметрами

  const response = await axios.get(`${baseURL}movie/${id}?${parameters}`);

  return response.data;
}

export default getMovieDetails;
