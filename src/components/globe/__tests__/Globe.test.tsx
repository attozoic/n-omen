import React from "react";
import { shallow } from "enzyme";
import Globe from "../Globe";

const setup = () => {
  const props = {
    data: {
      countryIds: ["RS", "HR"],
      mapCoords: [0, 0]
    }
  };

  const wrapper = shallow(<Globe {...props} />);

  return {
    wrapper
  };
};

describe("Globe component", () => {
  it("should render", () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
