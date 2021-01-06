import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from '../LoadingIndicator';

const setup = () => {
  const wrapper = shallow(<LoadingIndicator />);

  return { wrapper };
};

describe('Loading component', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
