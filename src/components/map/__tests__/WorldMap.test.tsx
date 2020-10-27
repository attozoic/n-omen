import React from "react";
import { shallow } from "enzyme";
import WorldMap from "../WorldMap";

const setup = () => {
  const props = {
    data: {
      countryIds: ["RS", "HR"],
      globeCoords: [0, 0]
    }
  };

  const wrapper = shallow(<WorldMap {...props} />);

  return {
    wrapper
  };
};

describe("WorldMap component", () => {
  it("should render", () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
