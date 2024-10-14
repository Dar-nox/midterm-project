import React, { useState } from 'react';

const AddItem = ({ onAddItem }) => {
  // Form state for input fields
  const [item, setItem] = useState({
    id: '',
    name: '',
    quantity: '',
    price: '',
    category: 'Clothing', // Default category
  });

  // Form validation state
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: check for empty fields
    if (!item.id || !item.name || !item.quantity || !item.price || !item.category) {
      setError('All fields are required!');
      setSuccessMessage('');
      return;
    }

    // Validation: check if quantity and price are positive numbers
    if (isNaN(item.quantity) || isNaN(item.price) || item.quantity <= 0 || item.price <= 0) {
      setError('Quantity and Price must be positive numbers!');
      setSuccessMessage('');
      return;
    }

    // Clear error and proceed to add item
    setError('');
    onAddItem(item); // Call the parent component's onAddItem function to update the inventory
    setSuccessMessage('Item added successfully!');
    
    // Clear form
    setItem({
      id: '',
      name: '',
      quantity: '',
      price: '',
      category: 'Clothing',
    });
  };

  return (
    <div>
      <h2>Add Item</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID: </label>
          <input
            type="text"
            name="id"
            value={item.id}
            onChange={handleChange}
            placeholder="Enter ID"
          />
        </div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            placeholder="Enter Quantity"
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={handleChange}
            placeholder="Enter Price"
          />
        </div>
        <div>
          <label>Category: </label>
          <select name="category" value={item.category} onChange={handleChange}>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
