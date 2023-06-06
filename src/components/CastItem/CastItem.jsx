const CastItem = ({ name, profile_path, character }) => {
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
      <h3>{name}</h3>
      <p>{character}</p>
    </li>
  );
};

export default CastItem;
