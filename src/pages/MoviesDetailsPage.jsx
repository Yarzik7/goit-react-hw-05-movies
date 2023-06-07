import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MoviesDetails from 'components/MovieDetails/MovieDetails';
import getMovieDetails from 'api/getMovieDetails';
import { Section } from 'components/Section/Section';

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

  return (
    <main>
      <Section>
        <MoviesDetails id={movieId} movie={movie} />
      </Section>
    </main>
  );
};

export default MoviesDetailsPage;
