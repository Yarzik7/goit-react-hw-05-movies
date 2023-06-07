import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  MovieGenerallInfoStyled,
  MovieTitleStyled,
  VoteAvarageStyled,
  PartInfoContainerStyled,
  InfoTitle,
  AddInfoContainerStyled,
  AddInfoTitleStyled,
  InfoLinksListStyled,
} from './MovieDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';
import { HiArrowLeft } from 'react-icons/hi';

const MoviesDetails = ({ movie }) => {
  const { poster_path, title, vote_average, overview } = movie;

   const location = useLocation();
   const backLinkHref = location.state?.from ?? '/movies';
  //console.log(movie);
  return (
    <>
      <BackLink to={backLinkHref}>
        <HiArrowLeft size="24" />
        Go back
      </BackLink>
      <MovieGenerallInfoStyled>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
            {/* <ul>{genres.map(({name}) => (<li>{name}</li>))}</ul> */}
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
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
