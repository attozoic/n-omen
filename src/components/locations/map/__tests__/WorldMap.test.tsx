import React from 'react';
import { shallow } from 'enzyme';
import WorldMap from '../WorldMap';
import { updateCoords } from '../../state/actions';

const setup = () => {
  const props = {
    data: {
      countryIds: ['RS', 'HR'],
      centroid: [1, 1],
      haveContent: false
    },
    updateCoords
  };

  const wrapper = shallow(<WorldMap {...props} />);

  return {
    wrapper
  };
};

describe('WorldMap component', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
