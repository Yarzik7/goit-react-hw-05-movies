import { BackLinkStyled } from './BackLink.styled';

const BackLink = ({to, children}) => {
  return <BackLinkStyled to={to}>{children}</BackLinkStyled>;
};

export {BackLink}