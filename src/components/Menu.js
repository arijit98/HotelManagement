import React from 'react';
import Item from './Item';
import logo from '../logo.svg';

const Menu = () => {
    const menuItems = [
        { id: 1, name: 'Home', image: "https://via.placeholder.com/150", description: "This is the home page", price: 0 },
        { id: 2, name: 'About', image: logo, description: "", price: 0 },
        { id: 3, name: 'Services', image: "", description: "", price: 0 },
        { id: 4, name: 'Contact', image: "", description: "", price: 0 }
    ];

    return (
        <div>
            {menuItems.map(function(item) {
                return <Item name={item.name} description={item.description} picture = {item.image} price ={item.price}/>;
            })};

        </div>
    );
};

export default Menu;