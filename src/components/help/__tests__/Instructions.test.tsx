import React from 'react';
import { shallow } from 'enzyme';
import { Typography } from '@material-ui/core';
import Instructions from '../Instructions';
import { mapStateToProps } from '../InstructionsContainer';
import initialState from '../../../state/initialState';

const setup = (propOverrides?: { firstSearchDone: boolean }) => {
  const props = {
    firstSearchDone: false,
    error: Error('No results found. Try typing a different name.'),
    ...propOverrides
  };

  const wrapper = shallow(<Instructions {...props} />);

  return { wrapper };
};

describe('Instructions component', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render only instruction text if firstSearchDone is false', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Typography).text().includes('search')).toBe(true);
    expect(wrapper.find(Typography).text().includes('results')).toBe(false);
  });

  it('should render only error text if firstSearchDone is true', () => {
    const { wrapper } = setup({ firstSearchDone: true });
    expect(wrapper.find(Typography).text().includes('results')).toBe(true);
    expect(wrapper.find(Typography).text().includes('search')).toBe(false);
  });
});

describe('mapStateToProps', () => {
  it('should return correct data', () => {
    const testInitialState = {
      ...initialState,
      content: {
        ...initialState.content,
        firstSearchDone: true,
        error: null
      }
    };

    expect(mapStateToProps(testInitialState).firstSearchDone).toBe(true);
    expect(mapStateToProps(testInitialState).error).toBe(null);
  });
});
