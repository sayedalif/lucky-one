import React from 'react';

const Vegetable = (props) => {
  console.log(props.vegetable);
  const { id, name, price, img } = props.vegetable;
  return (
    <div>
      <h1>Vegetable</h1>
    </div>
  );
};

export default Vegetable;
