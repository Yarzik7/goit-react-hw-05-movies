import Cast from 'components/Cast/Cast';
// import Header from 'components/Header/Header';
import Reviews from 'components/Reviews/Reviews';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';
import MoviesDetailsPage from 'pages/MoviesDetailsPage';
import MoviesPage from 'pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';

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
