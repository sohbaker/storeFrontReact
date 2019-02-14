import React from "react";
import CartItem from "./CartItem";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getData = () => {
    let dataToShow = [];
    const data = this.props.data;
    data.forEach(data => {
      if (data.cart_quantity > 0) {
        dataToShow.push({
          key: data.id,
          id: data.id,
          image: data.image,
          name: data.name,
          price: data.price,
          shop_quantity: data.shop_quantity,
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
              shop_quantity={item.shop_quantity}
              cart_quantity={item.cart_quantity}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onRemove={this.props.onRemove}
            />
          </div>
        )
      })
    }
    return (<div>{displayCartItems}</div>);
  }
}
