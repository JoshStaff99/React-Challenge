 import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ padding: '8px', fontSize: '16px', width: '100%' }}
    />
  );
};

export default SearchBar;