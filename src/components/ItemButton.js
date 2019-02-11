import React from "react";

const ItemButton = props => {
  return (
    <div>
      <button
        className="ui icon button"
        onClick={props.onClick}
        test="Add to cart"
      >
        <i className="shop icon" test="icon-image" />
      </button>
    </div>
  );
};

export default ItemButton;
