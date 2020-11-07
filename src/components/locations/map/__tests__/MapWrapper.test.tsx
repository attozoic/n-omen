import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress } from '@material-ui/core';
import MapWrapper from '../MapWrapper';
import WorldMap from '../WorldMap';

const setup = (propOverrides?: { isLoading: boolean; error: Error }) => {
  const props = {
    data: {
      countryIds: ['RS', 'HR'],
      globeCoords: [0, 0]
    },
    isLoading: true,
    error: null,
    ...propOverrides
  };

  const wrapper = shallow(<MapWrapper {...props} />);
  const mapComponent = wrapper.find(WorldMap);
  const loadingComponent = wrapper.find(LinearProgress);
  const errorComponent = wrapper.find({ children: 'Error component' });

  return {
    wrapper,
    mapComponent,
    loadingComponent,
    errorComponent
  };
};

describe('MapWrapper component', () => {
  describe('isLoading is true', () => {
    it('should render only loading indicator', () => {
      const { loadingComponent, mapComponent, errorComponent } = setup();
      expect(loadingComponent.exists()).toBe(true);
      expect(mapComponent.exists()).toBe(false);
      expect(errorComponent.exists()).toBe(false);
    });
  });

  describe('isLoading is false and there is an error', () => {
    it('should render only error component', () => {
      const { loadingComponent, mapComponent, errorComponent } = setup({
        isLoading: false,
        error: Error('Error found')
      });
      expect(loadingComponent.exists()).toBe(false);
      expect(mapComponent.exists()).toBe(false);
      expect(errorComponent.exists()).toBe(true);
    });
  });

  describe('isLoading is false and there is no error', () => {
    it('should render only map component', () => {
      const { loadingComponent, mapComponent, errorComponent } = setup({
        isLoading: false,
        error: null
      });
      expect(loadingComponent.exists()).toBe(false);
      expect(mapComponent.exists()).toBe(true);
      expect(errorComponent.exists()).toBe(false);
    });
  });
});
