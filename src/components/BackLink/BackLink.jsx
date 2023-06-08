import { BackLinkStyled } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return <BackLinkStyled to={to}>{children}</BackLinkStyled>;
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export { BackLink };
