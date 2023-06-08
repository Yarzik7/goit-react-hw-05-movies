import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MovieCardStyled, PosterStyled } from './MovieCard.styled';
import plugPosterMovie from '../../images/plug-movie-poster.png';
import { baseImageUrl } from 'constants/constants';

const MovieCard = ({ id, movieName, poster_path = "" }) => {
  const location = useLocation();

  return (
    <MovieCardStyled>
      <Link to={`/movies/${id}`} state={{ from: location }}>
          <PosterStyled
            src={
              poster_path ? `${baseImageUrl}${poster_path}` : plugPosterMovie
            }
            alt={movieName}
          />

        <h2>{movieName}</h2>
      </Link>
    </MovieCardStyled>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  movieName: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

export default MovieCard;
