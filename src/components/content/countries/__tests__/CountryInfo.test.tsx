import React from 'react';
import { shallow } from 'enzyme';
import CountryInfo from '../CountryInfo';
import { CountryData } from '../types';
import { updateCentroid } from '../../state/actions';

const setup = (propsOverride?: { data: { countries: CountryData[] } }) => {
  const props = {
    data: {
      countries: [
        {
          countryName: 'Serbia',
          namePopularity: 0.88823
        }
      ]
    },
    updateCentroid,
    ...propsOverride
  };

  const wrapper = shallow(<CountryInfo {...props} />);

  return { wrapper };
};

describe('CountryInfo component', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  describe('recieves array of countries', () => {
    it('should render all countries from an array', () => {
      const countries = [
        {
          countryName: 'Serbia',
          namePopularity: 0.88823
        },
        {
          countryName: 'Russia',
          namePopularity: 0.98382
        }
      ];
      const { wrapper } = setup({ data: { countries } });
      expect(wrapper.find({ children: 'Serbia' }).exists()).toBe(true);
      expect(wrapper.find({ children: 'Russia' }).exists()).toBe(true);
    });
  });
});
