import React, { useState } from 'react';
import './styles/DisplayItemsByCategory.css'; // Importing the CSS for DisplayItemsByCategory

const DisplayItemsByCategory = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('Clothing');

  const categories = ['Clothing', 'Electronics', 'Entertainment'];

  const filteredItems = items.filter(item => item.category === selectedCategory);

  return (
    <div className="display-items-container">
      <h2 className="display-items-title">Display Items by Category</h2>
      <div className="category-select">
        <label htmlFor="category">Select Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-dropdown"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <table className="items-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-items">No items found in this category.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayItemsByCategory;
