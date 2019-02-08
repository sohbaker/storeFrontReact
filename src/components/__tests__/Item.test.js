import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Item from "../Item";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByAttribute = (wrapper, val) => {
  return wrapper.find(`[test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<Item />);
});

test("displays the name", () => {
  const wrapper = shallow(<Item name="blue suede shoes" />);
  const name = findByAttribute(wrapper, "name");
  expect(name.text()).toContain("blue suede shoes");
});

test("displays the price", () => {
  const wrapper = shallow(<Item price="1299" />);
  const price = findByAttribute(wrapper, "price");
  expect(price.text()).toContain("1299");
});
