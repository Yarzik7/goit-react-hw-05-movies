import { Link } from 'react-router-dom';

const MovieCard = ({ id, movieName }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{movieName}</Link>
    </li>
  );
};

export default MovieCard;
