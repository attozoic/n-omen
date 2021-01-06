import React from 'react';
import { shallow } from 'enzyme';
import Country from '../Country';
import { mapStateToProps } from '../CountryContainer';
import initialState from '../../../../state/initialState';
import { updateCentroid, updateCoords } from '../../state/actions';

const setup = () => {
  const props = {
    data: {
      countries: [{ countryName: 'Serbia', namePopularity: 0.8237 }],
      haveContent: true,
      mapShouldMove: true
    },
    updateCentroid,
    updateCoords
  };

  const wrapper = shallow(<Country {...props} />);

  return {
    wrapper
  };
};

describe('Country component', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  describe('mapStateToProps', () => {
    it('should return correct data', () => {
      const testInitialState = {
        ...initialState,
        content: {
          ...initialState.content,
          haveContent: true,
          nameInfo: {
            ...initialState.content.nameInfo,
            countries: [
              { countryName: 'Serbia', namePopularity: 0.01313 },
              { countryName: 'Serbia', namePopularity: 0.01313 }
            ]
          }
        }
      };

      expect(mapStateToProps(testInitialState).data.countries.length).toBe(2);
      expect(
        mapStateToProps(testInitialState).data.countries[0].countryName
      ).toBe('Serbia');
      expect(
        mapStateToProps(testInitialState).data.countries[0].namePopularity
      ).toBe(0.01313);
      expect(mapStateToProps(testInitialState).data.haveContent).toBe(true);
    });
  });
});
