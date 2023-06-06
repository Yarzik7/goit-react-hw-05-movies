import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleQueryChange}
        value={query}
      />
    </form>
  );
};

export default Searchbar;
