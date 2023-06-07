import PropTypes from 'prop-types';
import { CastItemStyled } from './CastItem.styled';

const CastItem = ({ name, profile_path, character }) => {
  return (
    <CastItemStyled>
      <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
      <h3>{name}</h3>
      <h4>Character: {character}</h4>
    </CastItemStyled>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default CastItem;
