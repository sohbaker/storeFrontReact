import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Cart from "../Cart";

Enzyme.configure({ adapter: new EnzymeAdapter() });

let wrapper;
// let instance;

beforeEach(() => {
  wrapper = shallow(<Cart />);
  // instance = wrapper.instance();
});

const findByAttribute = (wrapper, val) => {
  return wrapper.find(`[test='${val}']`);
};

// test("renders without crashing", () => {
//   shallow(<Cart />);
// });

test("it accepts the prop data", () => {
  const data = [{
    cart_quantity: 2,
    id: 0,
    name: "Court Shoes, Nude Pink",
    category: "Women's Footwear",
    image: "https://i.imgur.com/fmUsxCO.jpg",
    price: 9900,
    shop_quantity: 3
  }]
  const wrapper = shallow(<Cart data={data}/>)
  expect(wrapper.find("CartItem").length).toBe(1);
});

// test("when rendered it updates this.state.cart with items available in this.state.data", () => {
//   const wrapper = shallow(<Cart />);
//   const instance = wrapper.instance();
//   const dataQuantity = instance.state.data.length;
//   const cartQuantity = instance.state.cart.length;
//   expect(cartQuantity).toEqual(dataQuantity);
// });
