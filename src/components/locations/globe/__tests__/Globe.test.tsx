import React from 'react';
import { shallow } from 'enzyme';
import Globe from '../Globe';
import { updateCoords } from '../../state/actions';

const setup = () => {
  const props = {
    data: {
      countryIds: ['RS', 'HR'],
      coords: [0, 0]
    },
    updateCoords
  };

  const wrapper = shallow(<Globe {...props} />);

  return {
    wrapper
  };
};

describe('Globe component', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
