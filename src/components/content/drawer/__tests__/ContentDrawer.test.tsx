import React from 'react';
import { shallow } from 'enzyme';
import { Drawer } from '@material-ui/core';
import ContentDrawer from '../ContentDrawer';
import { toggleMobileOpen } from '../../state/actions';
import { mapDispatchToProps, mapStateToProps } from '../ContentDrawerContainer';
import initialState from '../../../../state/initialState';
import Content from '../Content';
import InstructionsContainer from '../../../help/InstructionsContainer';
import LoadingIndicator from '../../../help/LoadingIndicator';

const setup = (propOverrides?: {
  haveContent: boolean;
  isLoading: boolean;
}) => {
  const props = {
    isLoading: false,
    haveContent: false,
    mobileOpen: false,
    toggleMobileOpen,
    ...propOverrides
  };

  const wrapper = shallow(<ContentDrawer {...props} />);

  const permanentDrawer = wrapper.find(Drawer).filterWhere((item) => {
    return item.prop('variant') === 'permanent';
  });

  const temporaryDrawer = wrapper.find(Drawer).filterWhere((item) => {
    return item.prop('variant') === 'temporary';
  });

  return {
    wrapper,
    permanentDrawer,
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
    });

    it('should render only content component if haveContent is true', () => {
      const { permanentDrawer } = setup({
        haveContent: true,
        isLoading: false
      });
      expect(permanentDrawer.find(Content).exists()).toBe(true);
      expect(permanentDrawer.find(InstructionsContainer).exists()).toBe(false);
      expect(permanentDrawer.find(LoadingIndicator).exists()).toBe(false);
    });

    it('should render only instructions component if haveContent is false', () => {
      const { permanentDrawer } = setup({
        haveContent: false,
        isLoading: false
      });
      expect(permanentDrawer.find(InstructionsContainer).exists()).toBe(true);
      expect(permanentDrawer.find(LoadingIndicator).exists()).toBe(false);
      expect(permanentDrawer.find(Content).exists()).toBe(false);
    });

    it('should render only loading indicator component if isLoading is true', () => {
      const { permanentDrawer } = setup({
        haveContent: true,
        isLoading: true
      });
      expect(permanentDrawer.find(LoadingIndicator).exists()).toBe(true);
      expect(permanentDrawer.find(InstructionsContainer).exists()).toBe(false);
      expect(permanentDrawer.find(Content).exists()).toBe(false);
    });
  });

  describe('temporary drawer', () => {
    it('should render', () => {
      const { temporaryDrawer } = setup();
      expect(temporaryDrawer.exists()).toBe(true);
    });

    it('should render only content component if haveContent is true', () => {
      const { temporaryDrawer } = setup({
        haveContent: true,
        isLoading: false
      });
      expect(temporaryDrawer.find(Content).exists()).toBe(true);
      expect(temporaryDrawer.find(InstructionsContainer).exists()).toBe(false);
      expect(temporaryDrawer.find(LoadingIndicator).exists()).toBe(false);
    });

    it('should render only instructions component if haveContent is false', () => {
      const { temporaryDrawer } = setup({
        haveContent: false,
        isLoading: false
      });
      expect(temporaryDrawer.find(InstructionsContainer).exists()).toBe(true);
      expect(temporaryDrawer.find(LoadingIndicator).exists()).toBe(false);
      expect(temporaryDrawer.find(Content).exists()).toBe(false);
    });

    it('should render only loading indicator component if isLoading is true', () => {
      const { temporaryDrawer } = setup({
        haveContent: true,
        isLoading: true
      });
      expect(temporaryDrawer.find(LoadingIndicator).exists()).toBe(true);
      expect(temporaryDrawer.find(InstructionsContainer).exists()).toBe(false);
      expect(temporaryDrawer.find(Content).exists()).toBe(false);
    });
  });

  describe('mapStateToProps', () => {
    it('should return correct data', () => {
      const testInitialState = {
        ...initialState,
        content: {
          ...initialState.content,
          mobileOpen: true,
          haveContent: true
        }
      };

      expect(mapStateToProps(testInitialState).mobileOpen).toBe(true);
      expect(mapStateToProps(testInitialState).haveContent).toBe(true);
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
