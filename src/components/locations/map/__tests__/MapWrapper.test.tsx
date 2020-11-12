import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress } from '@material-ui/core';
import MapWrapper from '../MapWrapper';
import WorldMap from '../WorldMap';
import { updateCoords } from '../../state/actions';
import { mapStateToProps, mapDispatchToProps } from '../MapContainer';
import initialState from '../../../../state/initialState';

const setup = (propOverrides?: { isLoading: boolean; error: Error }) => {
  const props = {
    data: {
      countryIds: ['RS', 'HR'],
      coords: [0, 0]
    },
    isLoading: true,
    error: null,
    updateCoords,
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

  describe('mapStateToProps', () => {
    it('should return correct data', () => {
      const testInitialState = {
        ...initialState,
        content: {
          isLoading: true,
          error: null,
          nameInfo: {
            countryIds: ['RS', 'HR'],
            name: null,
            age: 22,
            maleShare: null,
            countries: []
          }
        },
        locations: {
          coords: [25, 25]
        }
      };

      expect(mapStateToProps(testInitialState).isLoading).toBe(true);
      expect(mapStateToProps(testInitialState).error).toBe(null);
      expect(mapStateToProps(testInitialState).data.coords).toStrictEqual([
        25,
        25
      ]);
      expect(mapStateToProps(testInitialState).data.countryIds).toStrictEqual([
        'RS',
        'HR'
      ]);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch UPDATE_COORDS action with given payload', () => {
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).updateCoords([25, 25]);
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'UPDATE_COORDS',
        payload: [25, 25]
      });
    });
  });
});
