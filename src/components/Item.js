import React from "react";

const Item = props => {
  return (
    <div>
      <div>
        <img test="image">{props.image}</img>
      </div>
      <div>
        <p test="name">{props.name}</p>
        <p test="price">{props.price}</p>
      </div>
    </div>
  );
};

export default Item;
