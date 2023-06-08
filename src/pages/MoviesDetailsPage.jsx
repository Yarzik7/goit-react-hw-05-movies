import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MoviesDetails from 'components/MovieDetails/MovieDetails';
import getMovieDetails from 'api/getMovieDetails';
import { Section } from 'components/Section/Section';
import { BackLink } from 'components/BackLink/BackLink';
import { HiArrowLeft } from 'react-icons/hi';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  const [prevPage] = useState(backLinkHref);

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
        <BackLink to={prevPage}>
          <HiArrowLeft size="24" />
          Go back
        </BackLink>
        <MoviesDetails movie={movie} />
      </Section>
    </main>
  );
};

export default MoviesDetailsPage;
