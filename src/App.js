import React, { useState } from 'react';
import AddItem from './components/AddItem';
import RemoveItem from './components/RemoveItem';
import UpdateItem from './components/UpdateItem';
import SearchItem from './components/SearchItem';
import DisplayLowStockItems from './components/DisplayLowStockItems';
import SortItems from './components/SortItems';
import DisplayItems from './components/DisplayItems'

const App = () => {
  const [inventory, setInventory] = useState([]);

  // Function to add an item to inventory
  const handleAddItem = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  // Function to remove an item from inventory
  const handleRemoveItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  // Function to update an item in inventory
  const handleUpdateItem = (updatedItem) => {
    setInventory(inventory.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  return (
    <div>
      <h1>Inventory Management System</h1>

      {/* Add item component */}
      <AddItem onAddItem={handleAddItem} />

      {/* Search item component */}
      <SearchItem items={inventory} />

      {/* Update item component */}
      <UpdateItem items={inventory} onUpdateItem={handleUpdateItem} />

      {/* Remove item component */}
      <RemoveItem items={inventory} onRemoveItem={handleRemoveItem} />

      {/* Sort items and display them */}
      <SortItems items={inventory} />

      {/* Display items with category filter */}
      <DisplayItems items={inventory} filterByCategory={true} />
      
      {/* Display all items without filtering */}
      <DisplayItems items={inventory} filterByCategory={false} />

      {/* Display low stock items */}
      <DisplayLowStockItems items={inventory} />
    </div>
  );
};

export default App;
