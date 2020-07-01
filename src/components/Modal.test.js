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

const props = {
  id: 0,
  name: "iPhone 7",
  manufacturer: "Apple",
  description:
    "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
  color: "black",
  price: 769,
  imageFileName: "IPhone_7.png",
  screen: "4,7 inch IPS",
  processor: "A10 Fusion",
  ram: 2,
  isVisible: true,
  setVisible: jest.fn(),
};

it("Should redner Modal component whitout errors", () => {
  const component = findByTestAtrr(setUp(), "modalComponent");
  expect(component.length).toBe(1);
});
