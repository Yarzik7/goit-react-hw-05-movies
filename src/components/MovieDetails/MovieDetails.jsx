import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  MovieGenerallInfoStyled,
  MovieTitleStyled,
  VoteAvarageStyled,
  PartInfoContainerStyled,
  InfoTitle,
  AddInfoContainerStyled,
  AddInfoTitleStyled,
  InfoLinksListStyled,
  GenresListStyled,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';
import plugPosterMovie from '../../images/plug-movie-poster.png';
import { baseImageUrl } from 'constants/constants';

const MoviesDetails = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres = [] } = movie;

  return (
    <>
      <MovieGenerallInfoStyled>
        <div>
          <img
            src={
              poster_path ? `${baseImageUrl}${poster_path}` : plugPosterMovie
            }
            alt={`${title}`}
          />
        </div>

        <div>
          <MovieTitleStyled>{title}</MovieTitleStyled>
          <VoteAvarageStyled>Vote average: {vote_average}</VoteAvarageStyled>

          <PartInfoContainerStyled>
            <InfoTitle>Overview</InfoTitle>
            <p>{overview}</p>
          </PartInfoContainerStyled>

          <PartInfoContainerStyled>
            <InfoTitle>Genres</InfoTitle>
            <GenresListStyled>
              {genres.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </GenresListStyled>
          </PartInfoContainerStyled>
        </div>
      </MovieGenerallInfoStyled>

      <AddInfoContainerStyled>
        <AddInfoTitleStyled>Additional Information</AddInfoTitleStyled>
        <InfoLinksListStyled>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </InfoLinksListStyled>
      </AddInfoContainerStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

MoviesDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};

export default MoviesDetails;
