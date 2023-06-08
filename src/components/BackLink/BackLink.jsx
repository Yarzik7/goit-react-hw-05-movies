import { BackLinkStyled } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  console.log(to);
  return <BackLinkStyled to={to}>{children}</BackLinkStyled>;
};

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BackLink };
