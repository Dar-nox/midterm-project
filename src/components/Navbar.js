import React, { useState } from 'react';
import AddItem from './AddItem';
import RemoveItem from './RemoveItem';
import UpdateItem from './UpdateItem';
import SearchItem from './SearchItem';
import DisplayItemsByCategory from './DisplayItemsByCategory';
import DisplayAllItems from './DisplayAllItems';
import DisplayLowStockItems from './DisplayLowStockItems';
import SortItems from './SortItems';
import './styles/Navbar.css'; // Import the CSS file

const Navbar = ({ inventory, onAddItem, onRemoveItem, onUpdateItem }) => {
  const [activeComponent, setActiveComponent] = useState('addItem');

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          {/* Brand name */}
          <li className="nav-brand">WebDev IMS</li>

          {/* Navigation links */}
          <li className="nav-item"><button className={`nav-link ${activeComponent === 'addItem' ? 'active' : ''}`} onClick={() => handleNavClick('addItem')}>Add Item</button></li>
          <li className="nav-item"><button className={`nav-link ${activeComponent === 'updateItem' ? 'active' : ''}`} onClick={() => handleNavClick('updateItem')}>Update Item</button></li>
          <li className="nav-item"><button className={`nav-link ${activeComponent === 'removeItem' ? 'active' : ''}`} onClick={() => handleNavClick('removeItem')}>Remove Item</button></li>
          <li className="nav-item"><button className={`nav-link ${activeComponent === 'displayByCategory' ? 'active' : ''}`} onClick={() => handleNavClick('displayByCategory')}>Display Items by Category</button></li>
          <li className="nav-item"><button className={`nav-link ${activeComponent === 'displayAll' ? 'active' : ''}`} onClick={() => handleNavClick('displayAll')}>Display All Items</button></li>
          <li className="nav-item"><button className={`nav-link ${activeComponent === 'searchItem' ? 'active' : ''}`} onClick={() => handleNavClick('searchItem')}>Search Item</button></li>
          <li className="nav-item"><button className={`nav-link ${activeComponent === 'sortItems' ? 'active' : ''}`} onClick={() => handleNavClick('sortItems')}>Sort Items</button></li>
          <li className="nav-item"><button className={`nav-link ${activeComponent === 'lowStockItems' ? 'active' : ''}`} onClick={() => handleNavClick('lowStockItems')}>Display Low Stock Items</button></li>
        </ul>
      </nav>

      <div className="content">
        {activeComponent === 'addItem' && <AddItem onAddItem={onAddItem} />}
        {activeComponent === 'updateItem' && <UpdateItem onUpdateItem={onUpdateItem} items={inventory} />}
        {activeComponent === 'removeItem' && <RemoveItem onRemoveItem={onRemoveItem} items={inventory} />}
        {activeComponent === 'displayByCategory' && <DisplayItemsByCategory items={inventory} />}
        {activeComponent === 'displayAll' && <DisplayAllItems items={inventory} />}
        {activeComponent === 'searchItem' && <SearchItem items={inventory} />}
        {activeComponent === 'sortItems' && <SortItems items={inventory} />}
        {activeComponent === 'lowStockItems' && <DisplayLowStockItems items={inventory} />}
      </div>
    </div>
  );
};

export default Navbar;
