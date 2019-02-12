import React from "react";

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
        </div>
      </div>
    </div>
  );
};

export default CartItem;
