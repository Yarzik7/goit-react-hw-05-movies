const MoviesDetails = ({ id, movie }) => {
  const { poster_path, title, vote_average, overview, genres } = movie;
  console.log(movie);
  return (
    <div>
      <button>Go back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`${title}`}
      />
      <h2>{title}</h2>
      <p>Vote average: {vote_average}</p>

      <div>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>

      <div>
        <h3>Genres</h3>
        <ul>{genres.map(({name}) => (<li>{name}</li>))}</ul>
      </div>
    </div>
  );
};

export default MoviesDetails;
