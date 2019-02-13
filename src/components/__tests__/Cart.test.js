import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Cart from "../Cart";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByAttribute = (wrapper, val) => {
  return wrapper.find(`[test='${val}']`);
};

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