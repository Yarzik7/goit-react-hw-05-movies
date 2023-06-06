import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import getMovies from 'api/getMovies';
import { useSearchParams } from 'react-router-dom';

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
    <section>
      <Searchbar handleFormSubmit={handleFormSubmit} />
      {!!movies.length && <MoviesList movies={movies} />}
    </section>
  );
};

export default MoviesPage;
