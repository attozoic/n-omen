import React, { FC } from 'react';
import { PayloadAction } from 'typesafe-actions';
import CountryInfo from './CountryInfo';
import { CountryData } from './types';

export interface CountryStateProps {
  data: {
    countries: CountryData[];
    haveContent: boolean;
  };
}

interface CountryDispatchProps {
  updateCentroid: (
    centroid: number[]
  ) => PayloadAction<'UPDATE_CENTROID', number[]>;
  updateCoords: (coords: number[]) => PayloadAction<'UPDATE_COORDS', number[]>;
}

type CountryProps = CountryStateProps & CountryDispatchProps;

const Country: FC<CountryProps> = ({
  data,
  updateCentroid,
  updateCoords
}): JSX.Element => {
  return (
    <CountryInfo
      data={data}
      updateCentroid={updateCentroid}
      updateCoords={updateCoords}
    />
  );
};

export default Country;
