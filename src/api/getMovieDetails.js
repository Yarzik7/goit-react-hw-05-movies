import axios from 'axios';

const requestParameters = {
  api_key: 'a54c3783addcfd6f83ea014e2d49ad26',
  language: 'en-US',
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';

async function getMovieDetails(id) {
  const parameters = new URLSearchParams(requestParameters); // Отримує частину url з параметрами

  const response = await axios.get(`${id}?${parameters}`);

  if (!response.data) {
    return Promise.reject(new Error(`No movies with id: ${id}!`));
  }

  console.log(response.data);
  return response.data;
}

export default getMovieDetails;
