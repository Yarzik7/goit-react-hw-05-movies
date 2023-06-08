import axios from 'axios';

const requestParameters = {
  api_key: 'a54c3783addcfd6f83ea014e2d49ad26',
  language: 'en-US',
};

async function getMovieDetails(id) {
  const parameters = new URLSearchParams(requestParameters); // Отримує частину url з параметрами

  const response = await axios.get(`movie/${id}?${parameters}`);
  
  // if (!response.data.title) {
  //   return Promise.reject(new Error(`No movie with id: ${id}!`));
  // }

  return response.data;
}

export default getMovieDetails;
