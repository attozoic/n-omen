import React from "react";
import { shallow } from "enzyme";
import Country from "../Country";
import CountryInfo from "../CountryInfo";
import { CountryData } from "../types";

const setup = (propOverrides?: {
  data: {
    countries: CountryData[];
  };
}) => {
  const props = {
    data: {
      countries: [
        {
          countryName: "Serbia",
          namePopularity: 0.88823
        }
      ]
    },
    isLoading: false,
    error: null,
    ...propOverrides
  };

  const wrapper = shallow(<Country {...props} />);
  const component = wrapper.find(CountryInfo);

  return {
    props,
    wrapper,
    component
  };
};

describe("Country component", () => {
  it("should render", () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  describe("recieves at least one country name in props", () => {
    it("should render CountryInfo component", () => {
      const { component } = setup();
      expect(component.exists()).toBe(true);
    });
  });

  describe("recieves no country names in props", () => {
    it("should not render CountryInfo component", () => {
      const { component } = setup({
        data: {
          countries: [
            {
              countryName: null,
              namePopularity: null
            }
          ]
        }
      });
      expect(component.exists()).toBe(false);
    });
  });
});
