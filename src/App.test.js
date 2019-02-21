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
    "https://api.myjson.com/bins/zsciy"
  );
});

test("clicking the add to cart button decreases the shop quantity for item", () => {
  const mockSuccessResponse = {
    products: [
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
        name: "Platform Heels, White",
        category: "Women's Footwear",
        image: "https://i.imgur.com/pTIH42p.jpg",
        price: 4200,
        shop_quantity: 4
      }
    ]
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = mount(<App />);
  wrapper.setState({ data: mockSuccessResponse.products });
  const instance = wrapper.instance();

  const shopQuantity = instance.state.data[0].shop_quantity;
  const findFirstItem = wrapper.find("Item").first();
  const button = findByTestAttr(findFirstItem, "Add to cart");
  button.simulate("click");
  wrapper.update();
  const quantityDisplay = findByTestAttr(findFirstItem, "quantity");
  expect(quantityDisplay.text()).toContain(shopQuantity - 1);
});

// test("resets shop_quantity when remove from cart button is clicked", () => {
//   const redShoe = instance.state.data[1];
//   const redShoeQuantity = redShoe.shop_quantity;
//   instance.handleAddClick(redShoe.id);
//   instance.handleAddClick(redShoe.id);
//   instance.handleRemoveClick(redShoe.id);
//   expect(instance.state.data[1].shop_quantity).toEqual(redShoeQuantity);
// });

test("when rendered, it divides each item price by 100 and converts value to a float", () => {
  const mockSuccessResponse = {
    products: [
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
        name: "Platform Heels, White",
        category: "Women's Footwear",
        image: "https://i.imgur.com/pTIH42p.jpg",
        price: 4200,
        shop_quantity: 4
      }
    ]
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = mount(<App />);
  wrapper.setState({ data: mockSuccessResponse.products });
  const instance = wrapper.instance();
  instance.setItemPrice()
  const findFirstItem = wrapper.find("Item").first();
  const price = findByTestAttr(findFirstItem, "price");
  expect(price.text()).toContain("99.00");
});
