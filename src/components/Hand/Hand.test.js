import React from "react";
import { shallow } from "enzyme";

import Hand from "./Hand";
import Card from "../Card/Card";

describe("Hand", () => {
  let wrapper;
  let hand = [];

  beforeEach(() => {
    hand = [
      { code: "0H", image: "test-image-1", suit: "HEARTS", value: "10" },
      { code: "9C", image: "test-image-2", suit: "CLUBS", value: "9" },
    ];
    wrapper = shallow(<Hand player="You" hand={hand} />);
  });

  it("renders the header text of which player", () => {
    expect(wrapper.find('h3').text()).toEqual("You");
  });

  it("renders Card for each card passed within the hand prop", () => {
    expect(wrapper.find(Card).length).toEqual(2);

    wrapper.setProps({
      player: "You",
      hand: [
        { code: "0H", image: "test-image-1", suit: "HEARTS", value: "10" },
        { code: "9C", image: "test-image-2", suit: "CLUBS", value: "9" },
        { code: "3H", image: "test-image-3", suit: "HEARTS", value: "3" },
      ],
    });
    wrapper.update();
    expect(wrapper.find(Card).length).toEqual(3);
  });

});