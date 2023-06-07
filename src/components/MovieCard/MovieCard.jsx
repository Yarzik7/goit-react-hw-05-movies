import { Link, useLocation } from 'react-router-dom';
import { MovieCardStyled, PosterStyled } from './MovieCard.styled';

const MovieCard = ({ id, movieName, poster_path }) => {
const location = useLocation();

  return (
    <MovieCardStyled>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <PosterStyled
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={movieName}
        />

        <h2>{movieName}</h2>
      </Link>
    </MovieCardStyled>
  );
};

export default MovieCard;