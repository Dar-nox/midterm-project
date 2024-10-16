import React, { useState } from 'react';
import './styles/UpdateItem.css';

const UpdateItem = ({ onUpdateItem, items }) => {
  const [id, setId] = useState('');
  const [updateField, setUpdateField] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateItem = (e) => {
    e.preventDefault();
    const itemToUpdate = items.find((item) => item.id === id);
    
    if (!itemToUpdate) {
      setMessage('Item not found!');
      return;
    }

    if (!newValue) {
      setMessage('Please enter a new value');
      return;
    }

    const oldValue = updateField === 'quantity' ? itemToUpdate.quantity : itemToUpdate.price;
    
    const updatedItem = {
      ...itemToUpdate,
      [updateField]: updateField === 'quantity' ? parseInt(newValue) : parseFloat(newValue),
    };

    onUpdateItem(updatedItem);
    setMessage(`Item ${itemToUpdate.name} has been updated from ${oldValue} to ${newValue}`);
    setId('');
    setNewValue('');
    setUpdateField('quantity');
  };

  return (
    <div className="update-item-container">
      <h2 className="update-item-title">Update Item</h2>
      <form onSubmit={handleUpdateItem} className="update-item-form">
        <div className="form-group">
          <label htmlFor="id">Item ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="updateField">Update Field:</label>
          <select
            id="updateField"
            value={updateField}
            onChange={(e) => setUpdateField(e.target.value)}
            className="input-field"
          >
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="newValue">New Value:</label>
          <input
            type="number"
            id="newValue"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">Update Item</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UpdateItem;
