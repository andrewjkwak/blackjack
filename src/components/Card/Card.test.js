import React from "react";
import { shallow } from "enzyme";

import Card from "./Card";

describe("Card", () => {
  it("should render the Card with correct image path", () => {
    const wrapper = shallow(<Card image={"test-image-path"} />);
    expect(wrapper.prop("src")).toEqual("test-image-path");
  });
});