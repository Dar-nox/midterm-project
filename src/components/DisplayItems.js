import React, { useState } from 'react';

const DisplayItems = ({ items, filterByCategory }) => {
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('quantity'); // Default to sort by quantity
  const [sortOrder, setSortOrder] = useState('ascending'); // Default to ascending order

  // Handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Handle sort field change
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle sort order change
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Filter items based on selected category
  const filteredItems = category === 'All' ? items : items.filter(item => item.category === category);

  // Sort items based on selected criteria
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'quantity') {
      return sortOrder === 'ascending' ? a.quantity - b.quantity : b.quantity - a.quantity;
    } else if (sortBy === 'price') {
      return sortOrder === 'ascending' ? a.price - b.price : b.price - a.price;
    }
    return 0;
  });

  return (
    <div>
      <h2>Display Items</h2>

      {/* Category filter */}
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

      {/* Sort options */}
      <div>
        <label>Sort by: </label>
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>

        <label>Order: </label>
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      {/* Display the sorted and filtered items */}
      {sortedItems.length > 0 ? (
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
            {sortedItems.map((item) => (
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
