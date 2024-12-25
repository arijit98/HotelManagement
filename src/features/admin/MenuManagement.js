import React, { useState } from 'react';

const MenuManagement = () => {
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: 'Burger', price: 5.99 },
        { id: 2, name: 'Pizza', price: 8.99 },
        { id: 3, name: 'Salad', price: 4.99 },
    ]);

    const addItem = () => {
        const newItem = { id: menuItems.length + 1, name: 'New Item', price: 0.00 };
        setMenuItems([...menuItems, newItem]);
    };

    const removeItem = (id) => {
        setMenuItems(menuItems.filter(item => item.id !== id));
    };

    return (
        <div>
            <h1>Menu Management</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
};

export default MenuManagement;