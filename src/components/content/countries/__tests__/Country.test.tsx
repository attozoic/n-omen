import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress } from '@material-ui/core';
import CountryInfo from '../CountryInfo';
import Country from '../Country';
import { mapStateToProps } from '../CountryContainer';
import initialState from '../../../../state/initialState';

const setup = (propOverrides?: { isLoading: boolean; error: Error }) => {
  const props = {
    data: {
      countries: [{ countryName: 'Serbia', namePopularity: 0.8237 }]
    },
    isLoading: true,
    error: null,
    ...propOverrides
  };

  const wrapper = shallow(<Country {...props} />);
  const countryInfoComponent = wrapper.find(CountryInfo);
  const loadingComponent = wrapper.find(LinearProgress);
  const errorComponent = wrapper.find({ children: 'Error component' });

  return {
    wrapper,
    countryInfoComponent,
    loadingComponent,
    errorComponent
  };
};

describe('Country component', () => {
  describe('isLoading is true', () => {
    it('should render only loading indicator', () => {
      const {
        loadingComponent,
        countryInfoComponent,
        errorComponent
      } = setup();
      expect(loadingComponent.exists()).toBe(true);
      expect(countryInfoComponent.exists()).toBe(false);
      expect(errorComponent.exists()).toBe(false);
    });
  });

  describe('isLoading is false and there is an error', () => {
    it('should render only error component', () => {
      const { loadingComponent, countryInfoComponent, errorComponent } = setup({
        isLoading: false,
        error: Error('Error found')
      });
      expect(errorComponent.exists()).toBe(true);
      expect(loadingComponent.exists()).toBe(false);
      expect(countryInfoComponent.exists()).toBe(false);
    });
  });

  describe('isLoading is false and there is no error', () => {
    it('should render only CountryInfo component', () => {
      const { loadingComponent, countryInfoComponent, errorComponent } = setup({
        isLoading: false,
        error: null
      });
      expect(countryInfoComponent.exists()).toBe(true);
      expect(errorComponent.exists()).toBe(false);
      expect(loadingComponent.exists()).toBe(false);
    });
  });

  describe('mapStateToProps', () => {
    it('should return correct data', () => {
      const testInitialState = {
        ...initialState,
        content: {
          isLoading: true,
          error: null,
          nameInfo: {
            name: null,
            age: null,
            maleShare: null,
            countries: [
              { countryName: 'Serbia', namePopularity: 0.01313 },
              { countryName: 'Serbia', namePopularity: 0.01313 }
            ],
            countryIds: []
          }
        }
      };

      expect(mapStateToProps(testInitialState).isLoading).toBe(true);
      expect(mapStateToProps(testInitialState).error).toBe(null);
      expect(mapStateToProps(testInitialState).data.countries.length).toBe(2);
      expect(
        mapStateToProps(testInitialState).data.countries[0].countryName
      ).toBe('Serbia');
      expect(
        mapStateToProps(testInitialState).data.countries[0].namePopularity
      ).toBe(0.01313);
    });
  });
});
