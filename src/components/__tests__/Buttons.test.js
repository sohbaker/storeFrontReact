import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Buttons from "../Buttons";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByAttribute = (wrapper, val) => {
  return wrapper.find(`[test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<Buttons />);
});

test("renders add button", () => {
  const wrapper = shallow(<Buttons positive="Add" />);
  const positive = findByAttribute(wrapper, "positive");
  expect(positive.text()).toContain("Add");
});
