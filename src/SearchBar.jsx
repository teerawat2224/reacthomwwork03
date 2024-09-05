import React from 'react';

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="border p-2 rounded"
    />
  );
};

export default SearchBar;
