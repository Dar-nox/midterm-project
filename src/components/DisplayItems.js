import React, { useState } from 'react';

const DisplayItems = ({ items, filterByCategory }) => {
  const [category, setCategory] = useState('All');

  // Handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Filter items based on selected category
  const filteredItems = category === 'All' ? items : items.filter(item => item.category === category);

  return (
    <div>
      <h2>Display Items</h2>
      {filterByCategory && (
        <div>
          <label>Filter by Category: </label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
      )}

      {filteredItems.length > 0 ? (
        <table border="1">
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
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items available in this category.</p>
      )}
    </div>
  );
};

export default DisplayItems;
