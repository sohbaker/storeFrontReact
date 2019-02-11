import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ItemButton from "../ItemButton";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  shallow(<ItemButton />);
});

test("renders add to cart button", () => {
  const wrapper = shallow(<ItemButton />);
  const name = wrapper.find("[test='Add to cart']");
  expect(name.prop("test")).toContain("Add to cart");
});

test("renders cart icon on button", () => {
  const wrapper = shallow(<ItemButton />);
  const iconImage = wrapper.find("[test='icon-image']");
  expect(iconImage.hasClass("shop icon")).toBeTruthy();
});

test("disables button if item quantity is 0", () => {
  const quantity = 0;
  const wrapper = shallow(<ItemButton quantity={quantity} />);
  const name = wrapper.find("[test='Add to cart']");
  expect(name.hasClass("ui disabled button")).toBeTruthy();
});
