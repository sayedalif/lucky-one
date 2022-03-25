import React from 'react';
import './Vegetable.css';

const Vegetable = ({ vegetable, handleAddToCart }) => {
  const { name, price, img } = vegetable;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6 className="product-name">{name}</h6>
      <p className="product-price">price: ${price}</p>
      <button
        onClick={() => handleAddToCart(vegetable)}
        className="product-btn"
      >
        <p>add to cart</p>
      </button>
    </div>
  );
};

export default Vegetable;
