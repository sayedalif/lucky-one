import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Vegetable from '../Vegetable/Vegetable';
import './Shop.css';

const Shop = () => {
  // state for fetching fake data
  const [vegetables, setVegetables] = useState([]);

  // useEffect for fetching data
  useEffect(() => {
    fetch('vegetablesData.json')
      .then((res) => res.json())
      .then((data) => setVegetables(data));
  }, []);

  // state for cart
  const [cart, setCart] = useState([]);

  // event handler
  const handleAddToCart = (vegetable) => {
    const newCart = [...cart, vegetable];
    setCart(newCart);
  };

  // choose one

  // remove all

  const removeAll = () => {
    setCart([]);
  };

  return (
    // shop-container
    <div className="shop-container">
      {/* product-container */}
      <div className="products-container">
        {vegetables.map((vegetable) => (
          <Vegetable
            key={vegetable.id}
            vegetable={vegetable}
            handleAddToCart={handleAddToCart}
          ></Vegetable>
        ))}
      </div>

      {/* cart-container */}
      <div className="cart-container">
        {cart.map((item) => (
          <Cart item={item} key={item.id}></Cart>
        ))}
        <button onClick={() => console.log('got it')} className="choose-btn">
          <p>choose one</p>
        </button>
        <p></p>
        <button onClick={removeAll} className="remove-btn">
          <p>remove all</p>
        </button>

        <button className="choose-again-btn">
          <p>choose again</p>
        </button>
      </div>
    </div>
  );
};

export default Shop;
