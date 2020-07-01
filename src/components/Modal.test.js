import React from "react";
import { mount } from "enzyme";
import Modal from "./Modal";

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

const setUp = (props) => {
  return mount(<Modal {...props} />);
};

it("Should redner Modal component whitout errors", () => {
  const component = findByTestAtrr(setUp(), "modalComponent");
  expect(component.length).toBe(1);
});
