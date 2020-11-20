import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress } from '@material-ui/core';
import { mapStateToProps } from '../NameContainer';
import Name from '../Name';
import initialState from '../../../../state/initialState';

const setup = (propOverrides?: { isLoading: boolean; error: Error }) => {
  const props = {
    data: {
      name: 'John'
    },
    isLoading: true,
    error: null,
    ...propOverrides
  };

  const wrapper = shallow(<Name {...props} />);
  const nameComponent = wrapper.find({ children: 'John' });
  const loadingComponent = wrapper.find(LinearProgress);
  const errorComponent = wrapper.find({ children: 'Error component' });

  return {
    wrapper,
    nameComponent,
    loadingComponent,
    errorComponent
  };
};

describe('Name component', () => {
  describe('isLoading is true', () => {
    it('should render only loading indicator', () => {
      const { loadingComponent, nameComponent, errorComponent } = setup();
      expect(loadingComponent.exists()).toBe(true);
      expect(nameComponent.exists()).toBe(false);
      expect(errorComponent.exists()).toBe(false);
    });
  });

  describe('isLoading is false and there is an error', () => {
    it('should render only error component', () => {
      const { loadingComponent, nameComponent, errorComponent } = setup({
        isLoading: false,
        error: Error('Error found')
      });
      expect(loadingComponent.exists()).toBe(false);
      expect(nameComponent.exists()).toBe(false);
      expect(errorComponent.exists()).toBe(true);
    });
  });

  describe('isLoading is false and there is no error', () => {
    it('should render only name component', () => {
      const { loadingComponent, nameComponent, errorComponent } = setup({
        isLoading: false,
        error: null
      });
      expect(loadingComponent.exists()).toBe(false);
      expect(nameComponent.exists()).toBe(true);
      expect(errorComponent.exists()).toBe(false);
    });
  });

  describe('mapStateToProps', () => {
    it('should return correct data', () => {
      const testInitialState = {
        ...initialState,
        content: {
          ...initialState.content,
          nameInfo: {
            ...initialState.content.nameInfo,
            name: 'John'
          }
        }
      };

      expect(mapStateToProps(testInitialState).isLoading).toBe(true);
      expect(mapStateToProps(testInitialState).error).toBe(null);
      expect(mapStateToProps(testInitialState).data.name).toBe('John');
    });
  });
});
