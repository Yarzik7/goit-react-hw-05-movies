import { BackLinkStyled } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return <BackLinkStyled to={to}>{children}</BackLinkStyled>;
};

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { BackLink };
