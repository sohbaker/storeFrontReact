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

test("renders the item image", () => {
  const wrapper = shallow(<CartItem image="https://i.imgur.com/fmUsxCO.jpg" />);
  const image = findByAttribute(wrapper, "image");
  expect(image.prop("src")).toContain("https://i.imgur.com/fmUsxCO.jpg");
});

test("renders the item price", () => {
  const wrapper = shallow(<CartItem price="200" />);
  const price = findByAttribute(wrapper, "price");
  expect(price.text()).toContain("200");
});

test("renders the quantity of item in cart", () => {
  const wrapper = shallow(<CartItem cart_quantity="2" />);
  const quantity = findByAttribute(wrapper, "quantity");
  expect(quantity.text()).toContain("2");
});

test("renders CartButtons components", () => {
  const wrapper = shallow(<CartItem />);
  expect(wrapper.find("CartButtons").length).toBe(1);
});
