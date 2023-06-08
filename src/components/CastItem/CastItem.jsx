import PropTypes from 'prop-types';
import { CastItemStyled } from './CastItem.styled';
import plugActor from '../../images/plug-actor.png'

const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

const CastItem = ({ name, profile_path, character }) => {
  return (
    <CastItemStyled>
      <img
        src={profile_path ? `${baseImageUrl}${profile_path}` : plugActor}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>Character: {character}</h4>
    </CastItemStyled>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
  character: PropTypes.string.isRequired,
};

export default CastItem;
