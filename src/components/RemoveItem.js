import React, { useState } from 'react';
import './styles/RemoveItem.css'; // Importing the CSS for RemoveItem

const RemoveItem = ({ onRemoveItem, items }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemoveItem = (e) => {
    e.preventDefault();
    const itemToRemove = items.find((item) => item.id === id);

    if (!itemToRemove) {
      setMessage('Item not found!');
      return;
    }

    onRemoveItem(itemToRemove.id); // Use item ID to remove
    setMessage(`Item ${itemToRemove.name} has been removed from the inventory.`);
    setId(''); // Clear the input field
  };

  return (
    <div className="remove-item-container">
      <h2 className="remove-item-title">Remove Item</h2>
      <form onSubmit={handleRemoveItem} className="remove-item-form">
        <div className="form-group">
          <label htmlFor="id">Item ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="input-field"
            placeholder="Enter Item ID"
          />
        </div>
        <button type="submit" className="submit-btn">Remove Item</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default RemoveItem;
