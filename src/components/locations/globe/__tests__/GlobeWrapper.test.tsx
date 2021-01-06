import React from 'react';
import { shallow } from 'enzyme';
import GlobeWrapper from '../GlobeWrapper';
import { mapStateToProps } from '../GlobeContainer';
import initialState from '../../../../state/initialState';

const setup = () => {
  const props = {
    data: {
      coords: [0, 0]
    }
  };

  const wrapper = shallow(<GlobeWrapper {...props} />);

  return {
    wrapper
  };
};

describe('GlobeWrapper component', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});

describe('mapStateToProps', () => {
  it('should return correct data', () => {
    const testInitialState = {
      ...initialState,
      locations: {
        ...initialState.locations,
        coords: [25, 25]
      }
    };

    expect(mapStateToProps(testInitialState).data.coords).toStrictEqual([
      25,
      25
    ]);
  });
});
