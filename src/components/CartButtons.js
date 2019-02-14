import React from "react";

function disablePositiveButton(props) {
  if (props.shop_quantity === 0) {
    return "disabled";
  }
}

function disableNegativeButton(props) {
  if (props.cart_quantity === 1) {
    return "disabled";
  }
}

const CartButtons = props => {
  return (
    <div>
      <div>
        <button
          className={"negative ui button " + disableNegativeButton(props)}
          onClick={props.onDecrement}
          test="negative"
        >
          {props.negative}
        </button>
        <button
          className={"positive ui button " + disablePositiveButton(props)}
          onClick={props.onIncrement}
          test="positive"
        >
          {props.positive}
        </button>
      </div>
      <div>
        <button
          className={"ui button"}
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
