import React from "react";
import ItemButton from "./ItemButton";
import "./Item.css";

function styleOutOfStockText(props) {
  if (props.quantity === 0) {
    return "out-of-stock-text";
  }
}

function styleOutOfStockImage(props) {
  if (props.quantity === 0) {
    return "out-of-stock-image";
  }
}

const Item = props => {
  return (
    <div className="ui card single-item">
      <div className="image">
        <img
          test="image"
          className={"item-image " + styleOutOfStockImage(props)}
          src={props.image}
          alt={"image of " + props.name}
        />
      </div>
      <div className="content">
        <p test="name" className="header">
          {props.name}
        </p>
        <p test="category" className="date">
          {props.category}
        </p>
        <p test="price" className="description">
          £{props.price}
        </p>
        <p
          test="quantity"
          className={"extra-content " + styleOutOfStockText(props)}
        >
          {props.quantity === 0
            ? "Out of stock"
            : props.quantity + " remaining"}
        </p>
      </div>
      <div className="add-to-cart-button">
        <ItemButton onClick={props.onClick} quantity={props.quantity} />
      </div>
    </div>
  );
};

export default Item;
