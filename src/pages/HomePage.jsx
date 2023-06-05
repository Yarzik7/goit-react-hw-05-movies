import getTrending from 'api/getTrending';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const responseResolved = movies => {
      setTrendingMovies(movies);
      };
      
    const responseRejected = error => {
      console.log(error.message);
    };

    getTrending().then(responseResolved).catch(responseRejected);
  }, []);

  return <MoviesList trendingMovies={trendingMovies} />;
};

export default HomePage;
