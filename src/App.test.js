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

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<App />);
});

test("renders Item components based on data within this.state", () => {
  const numberOfProducts = instance.state.data.length;
  expect(wrapper.find("Item").length).toBe(numberOfProducts);
});

// test("deducts 1 from item quantity when add to cart button is clicked", () => {
//   shallow(<App />);
// });

// test("makes an API call", async () => {
//   const wrapper = shallow(<App />);
//   const data = await wrapper.state().data;
//   console.log(data);
//   wrapper.debug();
//   expect(data).toEqual(true);
// });
