import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import CartItem from "../CartItem";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByAttribute = (wrapper, val) => {
  return wrapper.find(`[test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<CartItem />);
});

test("renders the item name", () => {
  const wrapper = shallow(<CartItem name="Blue Prom Dress" />);
  const name = findByAttribute(wrapper, "name");
  expect(name.text()).toContain("Blue Prom Dress");
});
