import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

let wrapper;
let instance;

beforeEach(() => {
  wrapper = shallow(<App />);
  instance = wrapper.instance();
});

test("renders without crashing", () => {
  shallow(<App />);
});

test("renders Item components based on data within this.state", () => {
  const numberOfProducts = instance.state.data.length;
  expect(wrapper.find("Item").length).toBe(numberOfProducts);
});

test("deducts 1 from item quantity when add to cart button is clicked", () => {
  const redShoe = instance.state.data[1];
  const redShoeQuantity = redShoe.shop_quantity;
  instance.handleAddClick(redShoe.id);
  expect(instance.state.data[1].shop_quantity).toEqual(redShoeQuantity - 1);
});

test("when rendered it creates a cart_quantity key for existing items in shop data", () => {
  const cartQuantity = instance.state.data[1].cart_quantity;
  wrapper.debug();
  expect(cartQuantity).toEqual(0);
});
