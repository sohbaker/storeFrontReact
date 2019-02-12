import React from "react";
import ItemButton from "./ItemButton";

const Item = props => {
  return (
    <div className="ui card">
      <div className="image">
        <img test="image" src={props.image} alt={"image of " + props.name} />
      </div>
      <div className="content">
        <p test="name" className="header">
          {props.name}
        </p>
        <p test="category" className="date">
          {props.category}
        </p>
        <p test="price" className="description">
          {props.price}
        </p>
        <p test="quantity" className="extra-content">
          {props.quantity + " remaining"}
        </p>
        <ItemButton onClick={props.onClick} quantity={props.quantity} />
      </div>
    </div>
  );
};

export default Item;
