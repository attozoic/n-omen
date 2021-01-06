import React from 'react';
import { shallow } from 'enzyme';
import MapWrapper from '../MapWrapper';
import { updateCoords } from '../../state/actions';
import { mapStateToProps, mapDispatchToProps } from '../MapContainer';
import initialState from '../../../../state/initialState';

const setup = (propOverrides?: { isLoading: boolean }) => {
  const props = {
    data: {
      countryIds: ['RS', 'HR'],
      centroid: [0, 0],
      haveContent: false
    },
    isLoading: true,
    error: null,
    firstSearchDone: false,
    updateCoords,
    ...propOverrides
  };

  const wrapper = shallow(<MapWrapper {...props} />);

  return {
    wrapper
  };
};

describe('MapWrapper component', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  describe('mapStateToProps', () => {
    it('should return correct data', () => {
      const testInitialState = {
        ...initialState,
        content: {
          firstSearchDone: false,
          isLoading: true,
          error: null,
          mobileOpen: false,
          ...initialState.content,
          nameInfo: {
            countryIds: ['RS', 'HR'],
            name: null,
            age: 22,
            maleShare: null,
            countries: []
          }
        },
        locations: {
          ...initialState.locations,
          centroid: [25, 25]
        }
      };

      expect(mapStateToProps(testInitialState).data.countryIds).toStrictEqual([
        'RS',
        'HR'
      ]);
      expect(mapStateToProps(testInitialState).data.centroid).toStrictEqual([
        25,
        25
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
