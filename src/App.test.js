import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

let wrapper;
let instance;

beforeEach(() => {
  wrapper = shallow(<App />);
  instance = wrapper.instance();
});

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[test='${val}']`);
};

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

test("clicking the add to cart button decreases the shop quantity for item", () => {
  const wrapper = mount(<App />);
  const shopQuantity = instance.state.data[0].shop_quantity;
  const findFirstItem = wrapper.find("Item").first();
  const button = findByTestAttr(findFirstItem, "Add to cart");
  button.simulate("click");
  wrapper.update();
  const quantityDisplay = findByTestAttr(findFirstItem, "quantity");
  expect(quantityDisplay.text()).toContain(shopQuantity - 1);
});

test("resets shop_quantity when remove from cart button is clicked", () => {
  const redShoe = instance.state.data[1];
  const redShoeQuantity = redShoe.shop_quantity;
  instance.handleAddClick(redShoe.id);
  instance.handleAddClick(redShoe.id);
  instance.handleRemoveClick(redShoe.id)
  expect(instance.state.data[1].shop_quantity).toEqual(redShoeQuantity);
});

