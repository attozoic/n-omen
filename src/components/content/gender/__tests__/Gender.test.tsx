import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress } from '@material-ui/core';
import DonutChart from '../DonutChart';
import Gender from '../Gender';
import { mapStateToProps } from '../GenderContainer';
import initialState from '../../../../state/initialState';

const setup = (propOverrides?: { isLoading: boolean; error: Error }) => {
  const props = {
    data: {
      maleShare: 80
    },
    isLoading: true,
    error: null,
    ...propOverrides
  };

  const wrapper = shallow(<Gender {...props} />);
  const donutChartComponent = wrapper.find(DonutChart);
  const loadingComponent = wrapper.find(LinearProgress);
  const errorComponent = wrapper.find({ children: 'Error component' });

  return {
    wrapper,
    donutChartComponent,
    loadingComponent,
    errorComponent
  };
};

describe('Gender component', () => {
  describe('isLoading is true', () => {
    it('should render only loading indicator', () => {
      const { loadingComponent, donutChartComponent, errorComponent } = setup();
      expect(loadingComponent.exists()).toBe(true);
      expect(donutChartComponent.exists()).toBe(false);
      expect(errorComponent.exists()).toBe(false);
    });
  });

  describe('isLoading is false and there is an error', () => {
    it('should render only error component', () => {
      const { loadingComponent, donutChartComponent, errorComponent } = setup({
        isLoading: false,
        error: Error('Error found')
      });
      expect(errorComponent.exists()).toBe(true);
      expect(loadingComponent.exists()).toBe(false);
      expect(donutChartComponent.exists()).toBe(false);
    });
  });

  describe('isLoading is false and there is no error', () => {
    it('should render only DonutChart component', () => {
      const { loadingComponent, donutChartComponent, errorComponent } = setup({
        isLoading: false,
        error: null
      });
      expect(donutChartComponent.exists()).toBe(true);
      expect(errorComponent.exists()).toBe(false);
      expect(loadingComponent.exists()).toBe(false);
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
            maleShare: 56
          }
        }
      };

      expect(mapStateToProps(testInitialState).isLoading).toBe(true);
      expect(mapStateToProps(testInitialState).error).toBe(null);
      expect(mapStateToProps(testInitialState).data.maleShare).toBe(56);
    });
  });
});
