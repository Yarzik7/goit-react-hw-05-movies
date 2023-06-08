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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
