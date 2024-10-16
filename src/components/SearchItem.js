import React, { useState } from 'react';
import './styles/SearchItem.css';

const SearchItem = ({ items }) => {
  const [searchId, setSearchId] = useState('');
  const [searchedItem, setSearchedItem] = useState(null);
  const [itemNotFound, setItemNotFound] = useState(false);

  const handleSearch = () => {
    const foundItem = items.find(item => item.id === searchId);
    if (foundItem) {
      setSearchedItem(foundItem);
      setItemNotFound(false);
    } else {
      setSearchedItem(null);
      setItemNotFound(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-item-container">
      <h2 className="search-item-title">Search Item</h2>
      <div className="search-input">
        <label htmlFor="searchId">Enter Item ID:</label>
        <input
          type="text"
          id="searchId"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input-field"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      {searchedItem && (
        <table className="item-details-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{searchedItem.id}</td>
              <td>{searchedItem.name}</td>
              <td>{searchedItem.quantity}</td>
              <td>${searchedItem.price.toFixed(2)}</td>
              <td>{searchedItem.category}</td>
            </tr>
          </tbody>
        </table>
      )}

      {itemNotFound && searchId && (
        <p className="item-not-found">Item not found!</p>
      )}
    </div>
  );
};

export default SearchItem;
