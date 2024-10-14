import React, { useState, useEffect, useCallback } from 'react';

const SortItems = ({ items }) => {
  const [sortBy, setSortBy] = useState('quantity'); // Default sort by quantity
  const [sortOrder, setSortOrder] = useState('ascending'); // Default to ascending order
  const [sortedItems, setSortedItems] = useState([]); // State to store sorted items

  // Function to handle sort logic, wrapped with useCallback
  const sortInventoryItems = useCallback(() => {
    const newSortedItems = [...items].sort((a, b) => {
      if (sortBy === 'quantity') {
        return sortOrder === 'ascending' ? a.quantity - b.quantity : b.quantity - a.quantity;
      } else if (sortBy === 'price') {
        return sortOrder === 'ascending' ? a.price - b.price : b.price - a.price;
      }
      return 0;
    });

    setSortedItems(newSortedItems);
  }, [items, sortBy, sortOrder]);

  // UseEffect to run sorting logic whenever items, sortBy, or sortOrder changes
  useEffect(() => {
    sortInventoryItems();
  }, [items, sortBy, sortOrder, sortInventoryItems]);

  // Handle sort field change
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle sort order change
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div>
      <h2>Sort Items</h2>

      <div>
        {/* Select sort field */}
        <label>Sort by: </label>
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>

        {/* Select sort order */}
        <label> Order: </label>
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      {/* Display sorted items in a table */}
      {sortedItems.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items available to display.</p>
      )}
    </div>
  );
};

export default SortItems;
