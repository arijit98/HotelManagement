import React from 'react';
import './Item.scss';

const Item = ({ id, name, description, picture, price }) => {
    return (
        <div className="item">
            <img src={picture} alt={name} className="item-picture" />
            <h2 className="item-name">{name}</h2>
            <p className="item-description">{description}</p>
            <p className="item-price">Price: ${price}</p>
        </div>
    );
};

export default Item;