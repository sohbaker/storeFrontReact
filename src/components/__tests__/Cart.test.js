import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Cart from "../Cart";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  shallow(<Cart data={[]} />);
});

test("it accepts the prop data", () => {
  const data = [{
    cart_quantity: 2,
    id: 2,
    name: "Brogues, Tan",
    category: "Men's Footwear",
    image: "https:////i.imgur.com/4h9KYYa.jpg",
    price: 3400,
    shop_quantity: 10
  }]
  const wrapper = mount(<Cart data={data} />);
  expect(wrapper.prop('data').length).toBe(1);
  expect(wrapper.find("CartItem").length).toBe(1);
});

test("only renders items which have a cart quantitiy more than 0", () => {
  const data = [{
    cart_quantity: 2,
    id: 2,
    name: "Brogues, Tan",
    category: "Men's Footwear",
    image: "https:////i.imgur.com/4h9KYYa.jpg",
    price: 3400,
    shop_quantity: 10
  },
  {
    cart_quantity: 0,
    id: 3,
    name: "Flip Flops, Black",
    category: "Men's Footwear",
    image: "https://i.imgur.com/BXHvlyQ.jpg",
    price: 1900,
    shop_quantity: 6
  }]
  const wrapper = mount(<Cart data={data} />);
  expect(wrapper.find("CartItem").length).toBe(1);
});

test("displays order total for items in the cart", () => {
  const data = [{
    cart_quantity: 1,
    id: 2,
    name: "Brogues, Tan",
    category: "Men's Footwear",
    image: "https:////i.imgur.com/4h9KYYa.jpg",
    price: 3000,
    shop_quantity: 10
  },
  {
    cart_quantity: 3,
    id: 3,
    name: "Flip Flops, Black",
    category: "Men's Footwear",
    image: "https://i.imgur.com/BXHvlyQ.jpg",
    price: 1000,
    shop_quantity: 6
  }]
  const wrapper = mount(<Cart data={data} />);
  const instance = wrapper.instance()
  instance.calculateOrderTotal()
  const orderTotal = wrapper.find(`[test='${'order-total'}']`);
  expect(orderTotal.text()).toContain("6000");
});

test("it updates this.state.userDiscountCode when the submit button is clicked", () => {
  const data = [{
    cart_quantity: 2,
    id: 2,
    name: "Brogues, Tan",
    category: "Men's Footwear",
    image: "https:////i.imgur.com/4h9KYYa.jpg",
    price: 3400,
    shop_quantity: 10
  }]
  const wrapper = mount(<Cart data={data} />);
  const instance = wrapper.instance();
  const userDiscountCode = wrapper.find(`[test='${'discount-code'}']`);
  userDiscountCode.simulate('keyPress', { target: { value: '5OFF' } });
  // instance().componentDidUpdate();
  const button = wrapper.find(`[test='${'submit'}']`);
  button.simulate('click');
  instance.componentDidUpdate();
  expect(instance.state.userDiscountCode).toBe('5OFF');
});

test("returns true if user input in discount code field matches existing code", () => {
  const data = [{
    cart_quantity: 2,
    id: 2,
    name: "Brogues, Tan",
    category: "Men's Footwear",
    image: "https:////i.imgur.com/4h9KYYa.jpg",
    price: 3400,
    shop_quantity: 10
  }]
  const wrapper = mount(<Cart data={data} />);
  const instance = wrapper.instance();
  const userDiscountCode = wrapper.find(`[test='${'discount-code'}']`);
  userDiscountCode.simulate('keyPress', { target: { value: '5OFF' } })
  const button = wrapper.find(`[test='${'submit'}']`);
  button.simulate('click')
  instance.componentDidUpdate();
  instance.setState();
  console.log(instance.state.userDiscountCode)
  expect(instance.isCodeValid()).toEqual(true)
});

test("returns false if user input in discount code field matches existing code", () => {
  const data = [{
    cart_quantity: 2,
    id: 2,
    name: "Brogues, Tan",
    category: "Men's Footwear",
    image: "https:////i.imgur.com/4h9KYYa.jpg",
    price: 3400,
    shop_quantity: 10
  }]
  const wrapper = mount(<Cart data={data} />);
  const instance = wrapper.instance()
  const userDiscountCode = wrapper.find(`[test='${'discount-code'}']`);
  userDiscountCode.simulate('keyPress', { target: { value: 'DISCOUNTPLZ' } })
  const button = wrapper.find(`[test='${'submit'}']`);
  button.simulate('click')
  expect(instance.isCodeValid()).toEqual(false)
});

test("displays alert if user enters invalid discount code", () => {
  const data = [{
    cart_quantity: 2,
    id: 2,
    name: "Brogues, Tan",
    category: "Men's Footwear",
    image: "https:////i.imgur.com/4h9KYYa.jpg",
    price: 3400,
    shop_quantity: 10
  }]
  const wrapper = mount(<Cart data={data} />);
  const userDiscountCode = wrapper.find(`[test='${'discount-code'}']`);
  userDiscountCode.simulate('keyPress', { target: { value: 'DISCOUNTPLZ' } })
  const button = wrapper.find(`[test='${'submit'}']`);
  button.simulate('submit')
  const alert = wrapper.find(`[test='${'alert'}']`);
  expect(alert.text()).toContain("Invalid discount code")
});

test("deducts £5 from order total when the 5OFF voucher is used", () => {
  const data = [{
    cart_quantity: 2,
    id: 2,
    name: "Brogues, Tan",
    category: "Men's Footwear",
    image: "https:////i.imgur.com/4h9KYYa.jpg",
    price: 34.00,
    shop_quantity: 10
  }]
  const wrapper = mount(<Cart data={data} />);
  const instance = wrapper.instance()
  instance.setState({ userDiscountCode: '5OFF' })
  const orderTotal = wrapper.find(`[test='${'order-total'}']`);
  expect(orderTotal.text()).toContain("63.00")
});

test("displays the subtotal of the order separately from the final order total", () => {
  const data = [{
    cart_quantity: 2,
    id: 2,
    name: "Brogues, Tan",
    category: "Men's Footwear",
    image: "https:////i.imgur.com/4h9KYYa.jpg",
    price: 34.00,
    shop_quantity: 10
  }]
  const wrapper = mount(<Cart data={data} />);
  const instance = wrapper.instance()
  instance.setState({ userDiscountCode: '5OFF' })
  const subtotal = wrapper.find(`[test='${'subtotal'}']`);
  expect(subtotal.text()).toContain("68.00")
});

test("displays value of discount applied", () => {
  const data = [{
    cart_quantity: 2,
    id: 2,
    name: "Brogues, Tan",
    category: "Men's Footwear",
    image: "https:////i.imgur.com/4h9KYYa.jpg",
    price: 34.00,
    shop_quantity: 10
  }]
  const wrapper = mount(<Cart data={data} />);
  const instance = wrapper.instance()
  instance.setState({ userDiscountCode: '5OFF' })
  const discountValue = wrapper.find(`[test='${'discount-value'}']`);
  expect(discountValue.text()).toContain("5.00")
});