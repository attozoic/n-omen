import React, { FC } from 'react';
import { LinearProgress } from '@material-ui/core';
import { PayloadAction } from 'typesafe-actions';
import CountryInfo from './CountryInfo';
import { CountryData } from './types';

export interface CountryStateProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    countries: CountryData[];
  };
}

interface CountryDispatchProps {
  updateCentroid: (
    centroid: number[]
  ) => PayloadAction<'UPDATE_CENTROID', number[]>;
}

type CountryProps = CountryStateProps & CountryDispatchProps;

const Country: FC<CountryProps> = ({
  data,
  error,
  isLoading,
  updateCentroid
}): JSX.Element => {
  if (isLoading) {
    return <LinearProgress />;
  }

  if (error != null) {
    return <div>Error component</div>;
  }

  return <CountryInfo data={data} updateCentroid={updateCentroid} />;
};

export default Country;
