import { useState } from 'react';
import {
  InputStyled,
  SearchBarStyled,
  ButtonSubmitStyled,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

const Searchbar = ({ handleFormSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = ({ currentTarget: { value } }) => setQuery(value);

  const handleSubmit = event => {
    event.preventDefault();

    if (!query.trim()) {
      alert('Query is empty!');
      return;
    }

    handleFormSubmit(query);
    setQuery('');
  };

  return (
    <SearchBarStyled onSubmit={handleSubmit}>
      <InputStyled
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleQueryChange}
        value={query}
      />
      <ButtonSubmitStyled>Search</ButtonSubmitStyled>
    </SearchBarStyled>
  );
};

Searchbar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
