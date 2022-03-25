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

  const handleAddToCart = (vegetable) => {
    console.log(vegetable);
    const newCart = [...cart, vegetable];
    setCart(newCart);
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
        <h1>order summary</h1>
        <p>selected items{cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;