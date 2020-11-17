import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import { mapDispatchToProps } from '../SearchContainer';
import { getNameInfo, toggleMobileOpen } from '../../content/state/actions';

const setup = () => {
  const props = {
    getNameInfo,
    toggleMobileOpen
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

  describe('mapDispatchToProps', () => {
    it('should dispatch GET_NAME_INFO action', () => {
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).getNameInfo();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'GET_NAME_INFO'
      });
    });

    it('should dispatch TOGGLE_MOBILE_OPEN action', () => {
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).toggleMobileOpen();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'TOGGLE_MOBILE_OPEN'
      });
    });
  });
});
