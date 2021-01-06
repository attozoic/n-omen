import React from 'react';
import { shallow } from 'enzyme';
import DonutChart from '../DonutChart';
import Gender from '../Gender';
import { mapStateToProps } from '../GenderContainer';
import initialState from '../../../../state/initialState';

const setup = () => {
  const props = {
    data: {
      maleShare: 80
    },
    haveContent: true,
    error: null
  };

  const wrapper = shallow(<Gender {...props} />);
  const donutChartComponent = wrapper.find(DonutChart);

  return {
    wrapper,
    donutChartComponent
  };
};

describe('Gender component', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render DonutChart component', () => {
    const { donutChartComponent } = setup();
    expect(donutChartComponent.exists()).toBe(true);
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
      expect(mapStateToProps(testInitialState).data.maleShare).toBe(56);
    });
  });
});
