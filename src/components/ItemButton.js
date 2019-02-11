import React from "react";

function disableButton(props) {
  if (props.quantity === 0) {
    return "ui disabled button";
  }
  return "ui icon button";
}

const ItemButton = props => {
  return (
    <div>
      <button
        className={disableButton(props)}
        onClick={props.onClick}
        test="Add to cart"
      >
        <i className="shop icon" test="icon-image" />
      </button>
    </div>
  );
};

export default ItemButton;
