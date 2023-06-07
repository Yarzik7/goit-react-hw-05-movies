import MovieCard from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import { MovieListStyled } from './MovieList.styled';

const mapMovies = ({ id, title, name, poster_path }) => (
  <MovieCard
    key={id}
    id={id}
    movieName={title || name}
    poster_path={poster_path}
  />
);

const MoviesList = ({ movies }) => {
  return <MovieListStyled>{movies.map(mapMovies)}</MovieListStyled>;
};

mapMovies.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default MoviesList;
