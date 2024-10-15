import React, { useState } from 'react';
import './styles/AddItem.css';

const AddItem = ({ onAddItem }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Clothing');
  const [message, setMessage] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!id || !name || !quantity || !price || !category) {
      setMessage('Please fill in all fields');
      return;
    }

    const newItem = {
      id,
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      category,
    };

    onAddItem(newItem);
    setMessage('Item added successfully!');
    setId('');
    setName('');
    setQuantity('');
    setPrice('');
    setCategory('Clothing');
  };

  return (
    <div className="add-item-container">
      <h2 className="add-item-title">Add New Item</h2>
      <form onSubmit={handleAddItem} className="add-item-form">
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
          <label htmlFor="name">Item Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field"
          >
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Add Item</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddItem;
