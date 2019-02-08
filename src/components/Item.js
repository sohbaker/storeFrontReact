import React from "react";

const Item = props => {
  return (
    <div>
      <div>Image</div>
      <div>
        <p test="name">{props.name}</p>
        <p test="price">{props.price}</p>
      </div>
    </div>
  );
};

export default Item;
