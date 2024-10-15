import React, { useState } from 'react';
import './styles/SearchItem.css'; // Importing the CSS for SearchItem

const SearchItem = ({ items }) => {
  const [searchId, setSearchId] = useState('');
  const [searchedItem, setSearchedItem] = useState(null);
  const [itemNotFound, setItemNotFound] = useState(false); // State to track if the item was found

  const handleSearch = () => {
    const foundItem = items.find(item => item.id === searchId);
    if (foundItem) {
      setSearchedItem(foundItem);
      setItemNotFound(false); // Reset the not found state
    } else {
      setSearchedItem(null);
      setItemNotFound(true); // Set not found state
    }
  };

  // Function to handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Call handleSearch when Enter key is pressed
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
          onKeyDown={handleKeyDown} // Add the onKeyDown event handler
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
