import styled from '@emotion/styled';

const SearchBarStyled = styled.form`
  margin: 0 auto;
`;

const InputStyled = styled.input`
  min-width: 500px;
  height: 23px;

  padding-left: 8px;
  margin-right: 5px;

  border: 1px solid #000;

  outline: none;
`;

const ButtonSubmitStyled = styled.button`
  width: 80px;
  height: 28px;

  background-color: #000;
  color: #fff;

  border: none;

  outline: none;

  cursor: pointer;
`;

export { SearchBarStyled, InputStyled, ButtonSubmitStyled };
