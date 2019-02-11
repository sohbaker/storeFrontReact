import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ItemButton from "../ItemButton";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  shallow(<ItemButton />);
});

test("renders add to cart button", () => {
  const wrapper = shallow(<ItemButton name="Add to cart" />);
  const name = wrapper.find("[test='Add to cart']");
  expect(name.prop("test")).toContain("Add to cart");
});
