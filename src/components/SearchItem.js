import React, { useState } from 'react';

const SearchItem = ({ items }) => {
  const [itemId, setItemId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [message, setMessage] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setItemId(e.target.value);
  };

  // Handle search
  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the item in the inventory by ID
    const item = items.find(item => item.id === itemId);

    if (item) {
      setFoundItem(item);
      setMessage('');
    } else {
      setFoundItem(null);
      setMessage('Item not found!');
    }

    // Clear the input field after search
    setItemId('');
  };

  return (
    <div>
      <h2>Search Item</h2>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID: </label>
          <input
            type="text"
            value={itemId}
            onChange={handleInputChange}
            placeholder="Enter Item ID"
          />
        </div>
        <button type="submit">Search</button>
      </form>

      {foundItem && (
        <div>
          <h3>Item Found:</h3>
          <p><strong>ID:</strong> {foundItem.id}</p>
          <p><strong>Name:</strong> {foundItem.name}</p>
          <p><strong>Quantity:</strong> {foundItem.quantity}</p>
          <p><strong>Price:</strong> ${foundItem.price}</p>
          <p><strong>Category:</strong> {foundItem.category}</p>
        </div>
      )}
    </div>
  );
};

export default SearchItem;
