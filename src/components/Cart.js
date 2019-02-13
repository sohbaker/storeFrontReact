import React from "react";
import CartItem from "./CartItem";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data }
  }

  getData = () => {
    let dataToShow = [];
    const data = this.state.data;
    data.forEach(data => {
      if (data.cart_quantity > 0) {
        dataToShow.push({
          key: data.id,
          id: data.id,
          image: data.image,
          name: data.name,
          price: data.price,
          cart_quantity: data.cart_quantity
        })
      } else {
        return null;
      }
    })
    return dataToShow;
  }

  render() {
    const data = this.getData();
    let displayCartItems;
    if (!data) {
      displayCartItems = null;
    } else {
      displayCartItems = data.map(item => {
        return (
          <div className="cart-items" key={item.id}>
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.cart_quantity}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
            />
          </div>
        )
      })
    }
    return (<div>{displayCartItems}</div>);
  }
}
