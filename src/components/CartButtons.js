import React from "react";
import "./CartButtons.css";

function disablePositiveButton(props) {
  if (props.shop_quantity === 0) {
    return "disabled";
  }
  return;
}

function disableNegativeButton(props) {
  if (props.cart_quantity === 1) {
    return "disabled";
  }
  return;
}

const CartButtons = props => {
  return (
    <div>
      <div>
        <button
          className={
            "negative ui button cart-buttons " + disableNegativeButton(props)
          }
          onClick={props.onDecrement}
          test="negative"
        >
          {props.negative}
        </button>
        <button
          className={
            "positive ui button cart-buttons add-button " +
            disablePositiveButton(props)
          }
          onClick={props.onIncrement}
          test="positive"
        >
          {props.positive}
        </button>
      </div>
      <div>
        <button
          className={"ui button cart-buttons "}
          onClick={props.onRemove}
          test="remove"
        >
          {props.remove}
        </button>
      </div>
    </div>
  );
};

export default CartButtons;
