import React from 'react';

function Search({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        id="search"
        placeholder="Starbuck products..."
        onChange={handleSearch}
        className="search-input"
      />
    </form>
  );
}

export default Search;
