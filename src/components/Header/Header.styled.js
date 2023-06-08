import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderStyled = styled.header`
  width: 100%;
  min-height: 50px;

  border-bottom: 1px solid #000;
`;

const HeaderContainerStyled = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const NavListStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavLinkStyled = styled(NavLink)`
  display: block;
  padding-top: 16px;
  padding-bottom: 16px;

  font-size: 20px;

  &.active {
    color: #c21212;
  }
`;

export { HeaderStyled, NavListStyled, HeaderContainerStyled, NavLinkStyled };
