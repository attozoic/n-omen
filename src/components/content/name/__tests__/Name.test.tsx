import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps } from '../NameContainer';
import Name from '../Name';
import initialState from '../../../../state/initialState';

const setup = () => {
  const props = {
    data: {
      name: 'John'
    }
  };

  const wrapper = shallow(<Name {...props} />);

  return {
    wrapper
  };
};

describe('Name component', () => {
  it('should render name component', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
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

    expect(mapStateToProps(testInitialState).data.name).toBe('John');
  });
});
