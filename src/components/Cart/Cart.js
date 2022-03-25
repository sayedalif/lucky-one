import React from 'react';
import './Cart.css';

const Cart = (props) => {
  console.log(props);
  return (
    <div className="cart">
      <h1>order summary</h1>
      <p>selected items{props.cart.length}</p>
    </div>
  );
};

export default Cart;
