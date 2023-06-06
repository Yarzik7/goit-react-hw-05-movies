import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MoviesDetails from 'components/MovieDetails/MovieDetails';
import getMovieDetails from 'api/getMovieDetails';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
      const responseResolved = movie => {
        setMovie(movie);
      };

      const responseRejected = error => {
        console.log(error.message);
      };

      getMovieDetails(movieId).then(responseResolved).catch(responseRejected);
    }, [movieId]);

  return <MoviesDetails id={movieId} movie={movie} />;
};

export default MoviesDetailsPage;
