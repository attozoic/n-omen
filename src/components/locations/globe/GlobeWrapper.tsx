import React, { FC } from 'react';
import { LinearProgress } from '@material-ui/core';
import { PayloadAction } from 'typesafe-actions';
import Globe from './Globe';

export interface GlobeWrapperStateProps {
  isLoading: boolean | null;
  error: Error | null;
  data: {
    countryIds: string[] | null;
    coords: number[];
  };
}

export interface GlobeWrapperDispatchProps {
  updateCoords: (coords: number[]) => PayloadAction<'UPDATE_COORDS', number[]>;
}

type GlobeWrapperProps = GlobeWrapperStateProps & GlobeWrapperDispatchProps;

const GlobeWrapper: FC<GlobeWrapperProps> = ({
  data,
  isLoading,
  error,
  updateCoords
}) => {
  if (isLoading) {
    return <LinearProgress />;
  }

  if (error != null) {
    return <div>Error component</div>;
  }

  return <Globe data={data} updateCoords={updateCoords} />;
};

export default GlobeWrapper;
