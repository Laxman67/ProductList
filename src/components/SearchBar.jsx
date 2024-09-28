import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setSearchQuery } from '../store/actions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    // dispatch(setSearchQuery(query));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
