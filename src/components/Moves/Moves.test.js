import React from "react";
import { shallow } from "enzyme";

import Moves from "./Moves";

describe("Move", () => {
  let wrapper;
  const hitMock = jest.fn();
  const standMock = jest.fn();
  const resetMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Moves
        callHit={hitMock}
        callStand={standMock}
        resetGame={resetMock}
        result={ '' }
      />
    );
  });

  it("renders the moves buttons (hit, stand, reset)", () => {
    expect(wrapper.find("button").length).toEqual(3);
  });

  it("calls the passed in function when clicked", () => {
    wrapper.find("button").at(0).simulate("click");
    expect(hitMock).toHaveBeenCalled();
  });

  it("disables the hit and stand button if result exists", () => {
    wrapper.setProps({
      callHit: hitMock,
      standMock: standMock,
      resetMock: resetMock,
      result: "You win!",
    });
    wrapper.update();
    expect(wrapper.find("button").at(0).prop("disabled")).toBeTruthy();
    expect(wrapper.find("button").at(1).prop("disabled")).toBeTruthy();
  });
});