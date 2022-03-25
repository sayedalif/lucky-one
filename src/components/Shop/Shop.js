import React, { useEffect, useState } from 'react';
import Vegetable from '../Vegetable/Vegetable';

const Shop = () => {
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    fetch('vegetablesData.json')
      .then((res) => res.json())
      .then((data) => setVegetables(data));
  }, []);
  return (
    // shop-container
    <div className="shop-container">
      {/* product-container */}
      <div className="products-container">
        {vegetables.map((vegetable) => (
          <Vegetable key={vegetable.id} vegetable={vegetable}></Vegetable>
        ))}
      </div>

      {/* cart-container */}
      <div className="cart-container"></div>
    </div>
  );
};

export default Shop;
