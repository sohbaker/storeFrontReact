import React from "react";

const CartItem = props => {
  return (
    <div className="ui items">
      <div className="item">
        <div className="content">
          <p className="header" test="name">
            {props.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
