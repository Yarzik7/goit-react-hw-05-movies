import getTrending from 'api/getTrending';
import MoviesList from 'components/MoviesList/MoviesList';
import { Section } from 'components/Section/Section';
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

  return (
    <main>
      <Section title="Trending today">
        <MoviesList movies={trendingMovies ?? []} />
      </Section>
    </main>
  );
};

export default HomePage;
