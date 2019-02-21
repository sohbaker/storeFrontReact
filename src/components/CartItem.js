import React from "react";
import CartButtons from "./CartButtons";
import "./CartItem.css";

function itemTotal(price, cart_quantity) {
  const calculateTotal = price * cart_quantity;
  return calculateTotal.toFixed(2);
}

const CartItem = props => {
  return (
    <div className="ui items">
      <div className="item cart-item">
        <div className="image cart-image">
          <img src={props.image} test="image" alt={"image of " + props.name} />
        </div>
        <div className="content">
          <p className="header" test="name">
            {props.name}
          </p>
          <div className="extra cart-item-text">
            <p test="price">{"Price: £" + props.price}</p>
            <p test="quantity">{"Quantity: " + props.cart_quantity}</p>
          </div>
          <div className="description cart-item-text" test="total">
            {"Total price: £" + itemTotal(props.price, props.cart_quantity)}
          </div>
          <div>
            <CartButtons
              shop_quantity={props.shop_quantity}
              cart_quantity={props.cart_quantity}
              onIncrement={props.onIncrement}
              onDecrement={props.onDecrement}
              onRemove={props.onRemove}
              positive="+"
              negative="-"
              remove="Remove from cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
