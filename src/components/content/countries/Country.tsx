import React, { FC } from 'react';
import { LinearProgress } from '@material-ui/core';
import CountryInfo from './CountryInfo';
import { CountryData } from './types';

export interface CountryProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    countries: CountryData[];
  };
}

const Country: FC<CountryProps> = ({ data, error, isLoading }): JSX.Element => {
  if (isLoading) {
    return <LinearProgress />;
  }

  if (error != null) {
    return <div>Error component</div>;
  }

  return <CountryInfo data={data} />;
};

export default Country;
