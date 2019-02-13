import React from "react";
import Item from "./components/Item";
import Cart from "./components/Cart";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          name: "Court Shoes, Nude Pink",
          category: "Women's Footwear",
          image: "https://i.imgur.com/fmUsxCO.jpg",
          price: 9900,
          shop_quantity: 5
        },
        {
          id: 1,
          name: "Suede Heels, Red",
          category: "Women's Footwear",
          image: "https://i.imgur.com/DVnYQl7.jpg",
          price: 4200,
          shop_quantity: 4
        }
      ],
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.addCartQuantityKey();
  }

  addCartQuantityKey = () => {
    let shopItems = [...this.state.data];
    shopItems.forEach(item => {
      item["cart_quantity"] = 0;
    });
    this.setState({ data: shopItems });
  };

  handleClick = id => {
    let items = [...this.state.data];
    let item = { ...items[id] };
    if (item.shop_quantity > 0) {
      item.shop_quantity -= 1;
      item.cart_quantity += 1;
      items[id] = item;
      this.setState({ data: items });
    }
  };

  showCart = () => {
    const { data } = this.state;
    let showCart;
    data.forEach(data => {
      if (data.cart_quantity > 0) {
        showCart =
          <Cart
            key={data.id}
            id={data.id}
            data={this.state.data}
          />
      }
    })
    return showCart;
  };

  render() {
    const { data } = this.state;
    const showProducts = data.map(data => {
      return (
        <Item
          key={data.id}
          id={data.id}
          name={data.name}
          price={data.price}
          image={data.image}
          category={data.category}
          quantity={data.shop_quantity}
          onClick={id => this.handleClick(data.id)}
        />
      );
    });
    return (<div><div>{showProducts}</div>  <div>{this.showCart()}</div></div>);
  }
}
