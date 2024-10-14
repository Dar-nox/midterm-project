import React from 'react';

const DisplayLowStockItems = ({ items }) => {
  // Filter items with quantity 5 or below
  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <div>
      <h2>Low Stock Items</h2>
      {lowStockItems.length > 0 ? (
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
            {lowStockItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items with low stock.</p>
      )}
    </div>
  );
};

export default DisplayLowStockItems;
