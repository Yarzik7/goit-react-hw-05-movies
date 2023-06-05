import Header from 'components/Header/Header';
import HomePage from 'pages/HomePage';
import MoviesDetailsPage from 'pages/MoviesDetailsPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
    
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={''}></Route>
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </>
  );
};

export default App;
