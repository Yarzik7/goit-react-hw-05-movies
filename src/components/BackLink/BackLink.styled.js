import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const BackLinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 150px;
  min-height: 40px;
  margin-bottom: 25px;

  text-transform: uppercase;

  border: none;
  background-color: #000;
  color: #fff;
`;

export {BackLinkStyled}