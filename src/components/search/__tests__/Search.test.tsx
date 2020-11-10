import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import { mapDispatchToProps } from '../SearchContainer';
import { getNameInfo } from '../../content/state/actions';

const setup = () => {
  const props = {
    getNameInfo
  };
  const wrapper = shallow(<Search {...props} />);

  return {
    wrapper
  };
};

describe('Search component', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});

describe('mapDispatchToProps', () => {
  it('should dispatch GET_NAME_INFO action', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).getNameInfo();
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'GET_NAME_INFO'
    });
  });
});
