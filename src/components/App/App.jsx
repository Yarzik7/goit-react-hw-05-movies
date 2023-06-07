import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('pages/MoviesDetailsPage'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="movies" element={<MoviesPage />}></Route>
        <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
