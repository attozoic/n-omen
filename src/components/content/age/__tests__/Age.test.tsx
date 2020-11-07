import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress, Typography } from '@material-ui/core';
import { mapStateToProps } from '../AgeContainer';
import Age from '../Age';

const setup = (propOverrides?: { isLoading: boolean; error: Error }) => {
  const props = {
    data: {
      age: 22
    },
    isLoading: true,
    error: null,
    ...propOverrides
  };

  const wrapper = shallow(<Age {...props} />);
  const ageComponent = wrapper.find(Typography);
  const loadingComponent = wrapper.find(LinearProgress);
  const errorComponent = wrapper.find({ children: 'Error component' });

  return {
    wrapper,
    ageComponent,
    loadingComponent,
    errorComponent
  };
};

describe('Age component', () => {
  describe('isLoading is true', () => {
    it('should render only loading indicator', () => {
      const { loadingComponent, ageComponent, errorComponent } = setup();
      expect(loadingComponent.exists()).toBe(true);
      expect(ageComponent.exists()).toBe(false);
      expect(errorComponent.exists()).toBe(false);
    });
  });

  describe('isLoading is false and there is an error', () => {
    it('should render only error component', () => {
      const { loadingComponent, ageComponent, errorComponent } = setup({
        isLoading: false,
        error: Error('Error found')
      });
      expect(loadingComponent.exists()).toBe(false);
      expect(ageComponent.exists()).toBe(false);
      expect(errorComponent.exists()).toBe(true);
    });
  });

  describe('isLoading is false and there is no error', () => {
    it('should render only age component', () => {
      const { loadingComponent, ageComponent, errorComponent } = setup({
        isLoading: false,
        error: null
      });
      expect(loadingComponent.exists()).toBe(false);
      expect(ageComponent.exists()).toBe(true);
      expect(errorComponent.exists()).toBe(false);
    });
  });

  describe('mapStateToProps', () => {
    it('should return correct data', () => {
      const initialState = {
        content: {
          isLoading: true,
          error: null,
          nameInfo: {
            name: null,
            age: 22,
            gender: null,
            countries: [],
            countryIds: [],
            namePopularity: []
          }
        }
      };

      expect(mapStateToProps(initialState).isLoading).toBe(true);
      expect(mapStateToProps(initialState).error).toBe(null);
      expect(mapStateToProps(initialState).data.age).toBe(22);
    });
  });
});
