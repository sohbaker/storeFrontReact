import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  shallow(<App />);
});

// test("makes an API call", async () => {
//   const wrapper = shallow(<App />);
//   const data = await wrapper.state().data;
//   console.log(data);
//   wrapper.debug();
//   expect(data).toEqual(true);
// });
