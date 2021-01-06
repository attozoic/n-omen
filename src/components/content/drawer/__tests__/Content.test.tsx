import React from 'react';
import { shallow } from 'enzyme';
import Content from '../Content';
import AgeContainer from '../../age/AgeContainer';
import CountryContainer from '../../countries/CountryContainer';
import GenderContainer from '../../gender/GenderContainer';
import NameContainer from '../../name/NameContainer';

const setup = () => {
  const contentComponent = shallow(<Content />);

  return { contentComponent };
};

describe('Content component', () => {
  it('should render', () => {
    const { contentComponent } = setup();
    expect(contentComponent.exists()).toBe(true);
  });

  it('should render age, country, gender and name components', () => {
    const { contentComponent } = setup();
    expect(contentComponent.find(AgeContainer).exists()).toBe(true);
    expect(contentComponent.find(CountryContainer).exists()).toBe(true);
    expect(contentComponent.find(GenderContainer).exists()).toBe(true);
    expect(contentComponent.find(NameContainer).exists()).toBe(true);
  });
});
