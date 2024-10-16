import React from 'react';
import './styles/DisplayLowStockItems.css';

const DisplayLowStockItems = ({ items }) => {

  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <div className="display-low-stock-container">
      <h2 className="display-low-stock-title">Low Stock Items</h2>
      {lowStockItems.length === 0 ? (
        <p>No low stock items available.</p>
      ) : (
        <table className="display-low-stock-table">
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
            {lowStockItems.map(item => (
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

export default DisplayLowStockItems;
