import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps } from '../AgeContainer';
import Age from '../Age';
import initialState from '../../../../state/initialState';

const setup = () => {
  const props = {
    data: {
      age: 22,
      name: 'John'
    }
  };

  const wrapper = shallow(<Age {...props} />);

  return {
    wrapper
  };
};

describe('Age component', () => {
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
          nameInfo: {
            ...initialState.content.nameInfo,
            age: 22,
            name: 'John'
          }
        }
      };

      expect(mapStateToProps(testInitialState).data.age).toBe(22);
      expect(mapStateToProps(testInitialState).data.name).toBe('John');
    });
  });
});
