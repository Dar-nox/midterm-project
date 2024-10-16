import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [inventory, setInventory] = useState([]);

  const handleAddItem = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  const handleRemoveItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const handleUpdateItem = (updatedItem) => {
    setInventory(inventory.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  return (
    <div>
      <h1>Inventory Management System</h1>
      <Navbar
        inventory={inventory}
        onAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
        onUpdateItem={handleUpdateItem}
      />
    </div>
  );
};

export default App;
