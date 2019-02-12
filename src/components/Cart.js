import React from "react";
import CartItem from "./CartItem";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    this.getCartData();
  }

  getCartData() {
    return this.props.data;
  }

  render() { 
    const data = this.getCartData();
    console.log(data)
    const displayCartItems = data.map(data => {
      return (
        <div className="cart-items">
          {/* <div> */}
            <CartItem 
              id={data.id}
              key={data.id}
              image={data.image}
              name={data.name}
              price={data.price}
              quantity={data.quantity}
              onIncrement={data.onIncrement}
              onDecrement={data.onDecrement}
            />
          {/* </div> */}
        </div>
      )
    })
    return ( <div>{displayCartItems}</div>  );
  }
}
 