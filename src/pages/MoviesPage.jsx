import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import getMovies from 'api/getMovies';
import { useSearchParams } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import Message from 'components/Message/Message';
import { NOMOVIESMESSAGE } from 'constants/constants';

const MoviesPage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    const responseResolved = movies => {
      setMovies(movies);
    };

    const responseRejected = error => {
      console.log(error.message);
    };

    getMovies(query, page).then(responseResolved).catch(responseRejected);
  }, [page, query]);

  const updateQueryString = query => {
    const nextParams = query ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleFormSubmit = query => {
    updateQueryString(query);
    setPage(1);
  };

  return (
    <main>
      <Section>
        <Searchbar handleFormSubmit={handleFormSubmit} />
      </Section>
      {!!movies.length && (
        <Section>
          <MoviesList movies={movies} />
        </Section>
      )}
      {!movies.length && query && <Message message={`${NOMOVIESMESSAGE}${query}!`} />}
    </main>
  );
};

export default MoviesPage;
