import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDiscountCode: null,
      discountCodes: {
        "5OFF": 5.0,
        "10OFF50": 10.0,
        "15OFF75": 15.0
      }
    };
    this.discountMessage = React.createRef();
    this.textInput = React.createRef();
    this.discountValue = React.createRef();
  }

  componentDidUpdate() {
    this.displayDiscountMessage();
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
          category: data.category,
          shop_quantity: data.shop_quantity,
          cart_quantity: data.cart_quantity
        });
      } else {
        return null;
      }
    });
    return dataToShow;
  };

  doesCartContainFootwear = () => {
    const data = this.getData();
    let containsFootwear = false;

    data.forEach(item => {
      let itemCategory = item.category;

      if (itemCategory.includes("Footwear")) {
        containsFootwear = true;
      }
    });
    return containsFootwear;
  };

  calculateSubtotal = () => {
    const data = this.getData();
    if (data.length === 0) {
      return null;
    }
    const orderTotal = [];
    data.forEach(data => {
      orderTotal.push(data.price * data.cart_quantity);
    });
    const subtotal = orderTotal.reduce((total, price) => total + price);
    return subtotal.toFixed(2);
  };

  areDiscountConditionsMet = () => {
    const subtotal = this.calculateSubtotal();
    const five = this.state.userDiscountCode === "5OFF";
    const ten = this.state.userDiscountCode === "10OFF50" && subtotal > 50;
    const fifteen =
      this.state.userDiscountCode === "15OFF75" &&
      subtotal > 75 &&
      this.doesCartContainFootwear();
    if (five || ten || fifteen) {
      return true;
    }
    return false;
  };

  displayDiscountInfo = () => {
    let discountInfo = React.createElement(
      "p",
      { id: "discount-info" },
      "Discount value: £0"
    );

    if (this.areDiscountConditionsMet()) {
      discountInfo = React.createElement(
        "p",
        { id: "discount-info" },
        "Discount value: £" + this.getCodeValue()
      );
    }
    return discountInfo;
  };

  getCodeValue = () => {
    if (this.isCodeValid()) {
      const discountCodes = this.state.discountCodes;
      const discountValue = discountCodes[this.state.userDiscountCode];
      return discountValue.toFixed(2);
    }
    return 0;
  };

  isCodeValid = () => {
    const userCode = this.state.userDiscountCode;
    const discountCodes = this.state.discountCodes;
    return discountCodes.hasOwnProperty(userCode);
  };

  calculateOrderTotal = () => {
    const subtotal = this.calculateSubtotal();
    if (this.areDiscountConditionsMet()) {
      this.displayDiscountInfo();
      return (subtotal - this.getCodeValue()).toFixed(2);
    }
    return subtotal;
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.setState({ userDiscountCode: event.target.value });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ userDiscountCode: this.textInput.current.value });
  };

  handleCheckoutClick = event => {
    alert("Thanks for ordering from Nutmeg! Your items will be with you soon");
  };

  displayDiscountMessage = () => {
    if (
      this.state.userDiscountCode === null ||
      this.state.userDiscountCode === ""
    ) {
      return;
    }
    const node = this.discountMessage.current;
    if (this.areDiscountConditionsMet()) {
      node.setAttribute("class", "ui success message");
      const message = React.createElement(
        "p",
        { id: "success" },
        "Success! Your code has been applied"
      );
      return message;
    }
    node.setAttribute("class", "ui error message");
    const message = React.createElement(
      "p",
      { id: "error" },
      "Invalid discount code or conditions not met. Please try again"
    );
    return message;
  };

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
              onIncrement={id => this.props.onIncrement(item.id)}
              onDecrement={id => this.props.onDecrement(item.id)}
              onRemove={id => this.props.onRemove(item.id)}
            />
          </div>
        );
      });
    }
    return (
      <div>
        <div className="cart-header">
          <p>
            <span>
              <i className="shop icon small" test="icon-image" />
            </span>
            Shopping Cart
          </p>
        </div>
        <div>{displayCartItems}</div>
        <div className="total-for-cart">
          <div className="cart-total-text">
            <div test="subtotal">
              {"Subtotal: £" + this.calculateSubtotal()}
            </div>
            <div test="discount-value" ref={this.discountValue}>
              {this.displayDiscountInfo()}
            </div>
          </div>
          <div>
            <form className="ui form" onSubmit={this.handleSubmit}>
              <div className="four wide field">
                <label className="discount-form-header">Discount code</label>
                <div className="inline fields">
                  <div className="field">
                    <input
                      type="text"
                      name="discount-code"
                      placeholder=""
                      test="discount-code"
                      onKeyPress={this.handleKeyPress}
                      ref={this.textInput}
                      required
                    />
                  </div>
                  <div className="field">
                    <button className="ui button" type="submit" test="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div
              className="discount-message"
              ref={this.discountMessage}
              test="alert"
            >
              {this.displayDiscountMessage()}
            </div>
            <div test="order-total" className="order-total">
              {"Order total: £" + this.calculateOrderTotal()}
            </div>
            <button
              className="ui yellow right floated button checkout-button"
              type="button"
              onClick={this.handleCheckoutClick}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    );
  }
}
