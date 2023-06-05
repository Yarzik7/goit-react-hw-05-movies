import MovieCard from "components/MovieCard/MovieCard";

const mapMovies = ({ id, title, name }) => <MovieCard key={id} id={id} movieName={title || name} />;

const MoviesList = ({ trendingMovies }) => {
  return <ul>{trendingMovies.map(mapMovies)}</ul>;
};

export default MoviesList;
