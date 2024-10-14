import React, { useState } from 'react';

const UpdateItem = ({ items, onUpdateItem }) => {
  const [itemId, setItemId] = useState('');
  const [fieldToUpdate, setFieldToUpdate] = useState('quantity'); // default to quantity
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'itemId') setItemId(value);
    if (name === 'newValue') setNewValue(value);
    if (name === 'fieldToUpdate') setFieldToUpdate(value);
  };

  // Handle update item
  const handleSubmit = (e) => {
    e.preventDefault();

    const itemToUpdate = items.find(item => item.id === itemId);

    if (!itemToUpdate) {
      setMessage('Item not found!');
      return;
    }

    // Validation: new value must be a positive number
    if (isNaN(newValue) || newValue <= 0) {
      setMessage('New value must be a positive number!');
      return;
    }

    // Update logic based on selected field
    const updatedItem = { ...itemToUpdate };

    if (fieldToUpdate === 'quantity') {
      setMessage(`Quantity of item "${itemToUpdate.name}" updated from ${itemToUpdate.quantity} to ${newValue}`);
      updatedItem.quantity = newValue;
    } else if (fieldToUpdate === 'price') {
      setMessage(`Price of item "${itemToUpdate.name}" updated from ${itemToUpdate.price} to ${newValue}`);
      updatedItem.price = newValue;
    }

    // Call parent function to update the inventory
    onUpdateItem(updatedItem);

    // Clear the form
    setItemId('');
    setNewValue('');
  };

  return (
    <div>
      <h2>Update Item</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID: </label>
          <input
            type="text"
            name="itemId"
            value={itemId}
            onChange={handleInputChange}
            placeholder="Enter Item ID"
          />
        </div>
        <div>
          <label>Field to Update: </label>
          <select name="fieldToUpdate" value={fieldToUpdate} onChange={handleInputChange}>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div>
          <label>New Value: </label>
          <input
            type="number"
            name="newValue"
            value={newValue}
            onChange={handleInputChange}
            placeholder="Enter New Value"
          />
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItem;
