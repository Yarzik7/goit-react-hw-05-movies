import MovieCard from "components/MovieCard/MovieCard";
import { MovieListStyled } from "./MovieList.styled";

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

export default MoviesList;