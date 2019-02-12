import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import CartItem from "../CartItem";

Enzyme.configure({ adapter: new EnzymeAdapter() });

let wrapper;
let instance;

beforeEach(() => {
  wrapper = shallow(<CartItem />);
  instance = wrapper.instance();
});

test("renders without crashing", () => {
  shallow(<CartItem />);
});
