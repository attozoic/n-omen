import React from "react";
import { shallow } from "enzyme";
import { LinearProgress } from "@material-ui/core";
import GlobeWrapper from "../GlobeWrapper";
import Globe from "../Globe";

const setup = (propOverrides?: { isLoading: boolean; error: Error }) => {
  const props = {
    data: {
      countryIds: ["RS", "HR"],
      mapCoords: [0, 0]
    },
    isLoading: true,
    error: null,
    ...propOverrides
  };

  const wrapper = shallow(<GlobeWrapper {...props} />);
  const globeComponent = wrapper.find(Globe);
  const loadingComponent = wrapper.find(LinearProgress);
  const errorComponent = wrapper.find({ children: "Error component" });

  return {
    wrapper,
    globeComponent,
    loadingComponent,
    errorComponent
  };
};

describe("GlobeWrapper component", () => {
  describe("isLoading is true", () => {
    it("should render only loading indicator", () => {
      const { loadingComponent, globeComponent, errorComponent } = setup();
      expect(loadingComponent.exists()).toBe(true);
      expect(globeComponent.exists()).toBe(false);
      expect(errorComponent.exists()).toBe(false);
    });
  });

  describe("isLoading is false and there is an error", () => {
    it("should render only error component", () => {
      const { loadingComponent, globeComponent, errorComponent } = setup({
        isLoading: false,
        error: Error("Error found")
      });
      expect(errorComponent.exists()).toBe(true);
      expect(loadingComponent.exists()).toBe(false);
      expect(globeComponent.exists()).toBe(false);
    });
  });

  describe("isLoading is false and there is no error", () => {
    it("should render only globe component", () => {
      const { loadingComponent, globeComponent, errorComponent } = setup({
        isLoading: false,
        error: null
      });
      expect(globeComponent.exists()).toBe(true);
      expect(errorComponent.exists()).toBe(false);
      expect(loadingComponent.exists()).toBe(false);
    });
  });
});
