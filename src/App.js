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
    this.setItemPrice();
  }

  addCartQuantityKey = () => {
    let shopItems = [...this.state.data];
    shopItems.forEach(item => {
      item["cart_quantity"] = 0;
    });
    this.setState({ data: shopItems });
  };

  setItemPrice = () => {
    let shopItems = [...this.state.data];
    shopItems.forEach(item => {
      const currentPrice = item.price
      const newPrice = currentPrice / 100
      item["price"] = newPrice.toFixed(2);
    });
    this.setState({ data: shopItems });
  };

  handleAddClick = id => {
    let items = [...this.state.data];
    let item = { ...items[id] };
    if (item.shop_quantity > 0) {
      item.shop_quantity -= 1;
      item.cart_quantity += 1;
      items[id] = item;
      this.setState({ data: items });
    }
  };

  handleMinusClick = id => {
    let items = [...this.state.data];
    let item = { ...items[id] };
    if (item.cart_quantity >= 1) {
      item.shop_quantity += 1;
      item.cart_quantity -= 1;
      items[id] = item;
      this.setState({ data: items });
    }
  }

  handleRemoveClick = id => {
    let items = [...this.state.data];
    let item = { ...items[id] };
    let resetQuantity = item.shop_quantity + item.cart_quantity;
    item.shop_quantity = resetQuantity;
    item.cart_quantity = 0;
    items[id] = item;
    this.setState({ data: items });
  }

  showCart = () => {
    const { data } = this.state;
    let showCart;

    const checkCartQuantity = data.some(item => (item.cart_quantity > 0));
    if (checkCartQuantity) {
      showCart =
        <Cart
          data={this.state.data}
          onIncrement={this.handleAddClick}
          onDecrement={this.handleMinusClick}
          onRemove={this.handleRemoveClick}
        />
    }
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
          onClick={id => this.handleAddClick(data.id)}
        />
      );
    });
    return (<div><div>{showProducts}</div>  <div>{this.showCart()}</div></div>);
  }
}
