import React from "react";

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
        <p test="price" className="date">
          {props.price}
        </p>
      </div>
    </div>
  );
};

export default Item;
