import React, { FC } from 'react';
import { Typography, withStyles, Divider } from '@material-ui/core';
import { CountryData } from './types';

const TextTypography = withStyles({
  root: {
    color: '#1769aa',
    fontSize: 20
  }
})(Typography);

interface CountryInfoProps {
  data: {
    countries: CountryData[];
  };
}

const CountryInfo: FC<CountryInfoProps> = ({
  data: { countries }
}): JSX.Element => {
  const createFirstDivider = (index: number): JSX.Element => {
    let dividerEl: JSX.Element;
    if (index === 0) {
      dividerEl = <Divider />;
    }
    return dividerEl;
  };

  return (
    <div>
      {countries.map((country, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div data-testid="countryWrapper" key={`id-${i}`}>
            {createFirstDivider(i)}
            <TextTypography>{country.countryName}</TextTypography>
            <TextTypography>
              {`${country.namePopularity.toFixed(4)}%`}
            </TextTypography>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default CountryInfo;
