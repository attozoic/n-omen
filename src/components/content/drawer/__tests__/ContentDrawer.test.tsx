import React from 'react';
import { shallow } from 'enzyme';
import { Drawer, Hidden } from '@material-ui/core';
import ContentDrawer from '../ContentDrawer';
import { toggleMobileOpen } from '../../state/actions';
import CountryContainer from '../../countries/CountryContainer';
import AgeContainer from '../../age/AgeContainer';
import NameContainer from '../../name/NameContainer';
import GenderContainer from '../../gender/GenderContainer';
import { mapDispatchToProps, mapStateToProps } from '../ContentDrawerContainer';
import initialState from '../../../../state/initialState';

const setup = (propOverrides?: { mobileOpen: boolean }) => {
  const props = {
    mobileOpen: false,
    toggleMobileOpen,
    ...propOverrides
  };

  const wrapper = shallow(<ContentDrawer {...props} />);

  const permanentDrawer = wrapper.find(Drawer).filterWhere((item) => {
    return item.prop('variant') === 'permanent';
  });
  const permanentHiddenContainer = wrapper.find(Hidden).filterWhere((item) => {
    return item.prop('xsDown');
  });

  const temporaryDrawer = wrapper.find(Drawer).filterWhere((item) => {
    return item.prop('variant') === 'temporary';
  });

  return {
    wrapper,
    permanentDrawer,
    permanentHiddenContainer,
    temporaryDrawer
  };
};

describe('ContentDrawer component', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  describe('permanent drawer', () => {
    it('should render', () => {
      const { permanentDrawer } = setup();
      expect(permanentDrawer.exists()).toBe(true);
      expect(permanentDrawer.length).toBe(1);
    });

    it('should render content components', () => {
      const { permanentDrawer } = setup();
      expect(permanentDrawer.find(AgeContainer).exists()).toBe(true);
      expect(permanentDrawer.find(CountryContainer).exists()).toBe(true);
      expect(permanentDrawer.find(GenderContainer).exists()).toBe(true);
      expect(permanentDrawer.find(NameContainer).exists()).toBe(true);
    });
  });

  describe('temporary drawer', () => {
    it('should render', () => {
      const { temporaryDrawer } = setup();
      expect(temporaryDrawer.exists()).toBe(true);
      expect(temporaryDrawer.length).toBe(1);
    });

    it('should render content components', () => {
      const { temporaryDrawer } = setup();
      expect(temporaryDrawer.find(AgeContainer).exists()).toBe(true);
      expect(temporaryDrawer.find(CountryContainer).exists()).toBe(true);
      expect(temporaryDrawer.find(GenderContainer).exists()).toBe(true);
      expect(temporaryDrawer.find(NameContainer).exists()).toBe(true);
    });
  });

  describe('mapStateToProps', () => {
    it('should return correct data', () => {
      const testInitialState = {
        ...initialState,
        content: {
          ...initialState.content,
          mobileOpen: true
        }
      };

      expect(mapStateToProps(testInitialState).mobileOpen).toBe(true);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch TOGGLE_MOBILE_OPEN action', () => {
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).toggleMobileOpen();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'TOGGLE_MOBILE_OPEN'
      });
    });
  });
});
