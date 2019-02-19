import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

global.fetch = require("jest-fetch-mock");

Enzyme.configure({ adapter: new EnzymeAdapter() });

let wrapper;
let instance;

beforeEach(async () => {
  wrapper = await shallow(<App />);
  instance = wrapper.instance();
  fetch.resetMocks();
});

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<App />);
});

test("it fetches data from JSON file when server returns a successful response", async () => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  shallow(<App />);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenLastCalledWith(
    "https://api.myjson.com/bins/18f2he"
  );
});

// test("deducts 1 from item quantity when add to cart button is clicked", async () => {
//   const wrapper = await mount(<App />);
//   const itemShopQuantity = instance.state.data[0].shop_quantity;
//   const item = wrapper.find("Item").first();
//   instance.handleAddClick(item.id);

//   expect(item.text()).toContain(itemShopQuantity - 1);
// });

// test("when rendered it creates a cart_quantity key for existing items in shop data", () => {
//   const cartQuantity = instance.state.data[1].cart_quantity;
//   wrapper.debug();
//   expect(cartQuantity).toEqual(0);
// });

// test("clicking the add to cart button decreases the shop quantity for item", () => {
//   const wrapper = mount(<App />);
//   const shopQuantity = instance.state.data[0].shop_quantity;
//   const findFirstItem = wrapper.find("Item").first();
//   const button = findByTestAttr(findFirstItem, "Add to cart");
//   button.simulate("click");
//   wrapper.update();
//   const quantityDisplay = findByTestAttr(findFirstItem, "quantity");
//   expect(quantityDisplay.text()).toContain(shopQuantity - 1);
// });

// test("resets shop_quantity when remove from cart button is clicked", () => {
//   const redShoe = instance.state.data[1];
//   const redShoeQuantity = redShoe.shop_quantity;
//   instance.handleAddClick(redShoe.id);
//   instance.handleAddClick(redShoe.id);
//   instance.handleRemoveClick(redShoe.id);
//   expect(instance.state.data[1].shop_quantity).toEqual(redShoeQuantity);
// });

// test("when rendered, it divides each item price by 100 and converts value to a float", () => {
//   expect(instance.state.data[1].price).toEqual("42.00");
// });
