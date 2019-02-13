import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Cart from "../Cart";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByAttribute = (wrapper, val) => {
  return wrapper.find(`[test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<Cart data={[]} />);
});

test("it accepts the prop data", () => {
  const data = [{
    cart_quantity: 2,
    id: 0,
    name: "Court Shoes, Nude Pink",
    category: "Women's Footwear",
    image: "https://i.imgur.com/fmUsxCO.jpg",
    price: 9900,
    shop_quantity: 3
  }]
  const wrapper = mount(<Cart data={data} />);
  console.log(wrapper.debug());
  expect(wrapper.find("CartItem").length).toBe(1);
});