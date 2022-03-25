import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Vegetable;
