import React from "react";
import CartButtons from "./CartButtons";

function itemTotal(price, quantity) {
  return parseInt(price) * parseInt(quantity);
}

const CartItem = props => {
  return (
    <div className="ui items">
      <div className="item">
        <div class="image">
          <img src={props.image} test="image" alt={"image of " + props.name} />
        </div>
        <div className="content">
          <p className="header" test="name">
            {props.name}
          </p>
          <div class="description">
            <p test="price">{props.price}</p>
            <p test="quantity">{props.quantity}</p>
          </div>
          <div>
            <CartButtons
              onIncrement={props.onIncrement}
              onDecrement={props.onDecrement}
              positive="+"
              negative="-"
            />
          </div>
          <div class="extra" test="total">
            {itemTotal(props.price, props.quantity)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
