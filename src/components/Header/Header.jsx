import { Outlet } from 'react-router-dom';
import {
  HeaderStyled,
  NavListStyled,
  HeaderContainerStyled,
  NavLinkStyled,
} from './Header.styled';
import { Suspense } from 'react';

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderContainerStyled>
          <nav>
            <NavListStyled>
              <li>
                <NavLinkStyled to="/">Home</NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="/movies">Movies</NavLinkStyled>
              </li>
            </NavListStyled>
          </nav>
        </HeaderContainerStyled>
      </HeaderStyled>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
