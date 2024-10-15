import React from 'react';
import './styles/DisplayAllItems.css';

const DisplayAllItems = ({ items }) => {
  return (
    <div className="display-all-items-container">
      <h2 className="display-all-items-title">All Items</h2>
      {items.length === 0 ? (
        <p>No items available in the inventory.</p>
      ) : (
        <table className="display-all-items-table">
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
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DisplayAllItems;
