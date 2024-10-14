import React, { useState } from 'react';

const RemoveItem = ({ items, onRemoveItem }) => {
  const [itemId, setItemId] = useState('');
  const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setItemId(e.target.value);
  };

  // Handle remove item
  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the item in the inventory
    const itemToRemove = items.find(item => item.id === itemId);

    if (itemToRemove) {
      onRemoveItem(itemId); // Call the parent component's onRemoveItem function
      setMessage(`Item "${itemToRemove.name}" has been removed from the inventory.`);
    } else {
      setMessage('Item not found!');
    }

    // Clear the input field
    setItemId('');
  };

  return (
    <div>
      <h2>Remove Item</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID: </label>
          <input
            type="text"
            value={itemId}
            onChange={handleChange}
            placeholder="Enter ID"
          />
        </div>
        <button type="submit">Remove Item</button>
      </form>
    </div>
  );
};

export default RemoveItem;
