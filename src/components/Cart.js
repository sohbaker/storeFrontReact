import React from "react";
import CartItem from "./CartItem";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data }
  }

  render() {
    const data = this.state.data;
    const displayCartItems = data.map(data => {
      return (
        <div className="cart-items" key={data.id}>
          <CartItem
            key={data.id}
            id={data.id}
            image={data.image}
            name={data.name}
            price={data.price}
            quantity={data.quantity}
            onIncrement={data.onIncrement}
            onDecrement={data.onDecrement}
          />
        </div>
      )
    })
    return (<div>{displayCartItems}</div>);
  }
}
