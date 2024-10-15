import React, { useState } from 'react';
import './styles/SortItems.css'; // Importing the CSS for SortItems

const SortItems = ({ items }) => {
  const [sortBy, setSortBy] = useState('quantity');
  const [order, setOrder] = useState('ascending');
  const [sortedItems, setSortedItems] = useState([]);

  const handleSort = () => {
    const sortedArray = [...items].sort((a, b) => {
      const key = sortBy === 'quantity' ? 'quantity' : 'price';
      if (order === 'ascending') {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    });
    setSortedItems(sortedArray);
  };

  return (
    <div className="sort-items-container">
      <h2 className="sort-items-title">Sort Items</h2>
      <div className="sort-options">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="quantity">Sort by Quantity</option>
          <option value="price">Sort by Price</option>
        </select>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="sort-select"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <button onClick={handleSort} className="sort-button">Sort</button>
      </div>

      <table className="sort-items-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortItems;
