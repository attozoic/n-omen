import React from "react";
import { shallow } from "enzyme";
import CountryInfo from "../CountryInfo";
import { CountryData } from "../types";

const setup = (propsOverride?: { data: { countries: CountryData[] } }) => {
  const props = {
    data: {
      countries: [
        {
          countryName: "Serbia",
          namePopularity: 0.88823
        }
      ]
    },
    ...propsOverride
  };

  const wrapper = shallow(<CountryInfo {...props} />);
  const countryWrapper = wrapper.find({ "data-testid": "countryWrapper" });

  return { wrapper, countryWrapper };
};

describe("CountryInfo component", () => {
  it("should render", () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  describe("recieves array of countries", () => {
    it("should render all countries from an array", () => {
      const countries = [
        {
          countryName: "Serbia",
          namePopularity: 0.88823
        },
        {
          countryName: "Russia",
          namePopularity: 0.98382
        }
      ];
      const { wrapper, countryWrapper } = setup({ data: { countries } });
      expect(wrapper.find({ children: "Serbia" }).exists()).toBe(true);
      expect(wrapper.find({ children: "Russia" }).exists()).toBe(true);
      expect(countryWrapper.length).toBe(countries.length);
    });
  });
});
