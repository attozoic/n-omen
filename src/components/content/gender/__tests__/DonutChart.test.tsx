import React from "react";
import { shallow } from "enzyme";
import DonutChart from "../DonutChart";

const setup = () => {
  const props = {
    data: {
      maleShare: 80
    }
  };

  const wrapper = shallow(<DonutChart {...props} />);

  return {
    wrapper
  };
};

describe("DonutChart component", () => {
  it("should render", () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
