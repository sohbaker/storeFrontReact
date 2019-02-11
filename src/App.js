import React from "react";
import Item from "./components/Item";

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

  handleClick = id => {
    let items = [...this.state.data];
    let item = { ...items[id] };
    if (item.shop_quantity > 0) {
      item.shop_quantity -= 1;
      items[id] = item;
      this.setState({ data: items });
    }
  };

  // async componentDidMount() {
  //   try {
  //     const response = await fetch("https://api.myjson.com/bins/9d960");
  //     if (!response.ok) {
  //       this.setState({ responseError: response.statusText });
  //       throw Error(response.statusText);
  //     }
  //     const json = await response.json();
  //     console.log(json);
  //     this.setState({ data: json });
  //   } catch (error) {
  //     this.setState({ errorMessage: error });
  //   }
  // }

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
    return <div>{showProducts}</div>;
  }
}
