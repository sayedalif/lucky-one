// cart
const Cart = (props) => {
  const { name, img, id } = props.item;

  console.log(props.item);

  return (
    <div>
      <div className="product-cart">
        <p className="cart-title">Name: {name}</p>
        {/* <img className="cart-img" src={img} alt="" /> */}
      </div>
    </div>
  );
};

export default Cart;
