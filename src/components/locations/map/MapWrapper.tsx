import React, { FC } from 'react';
import { LinearProgress } from '@material-ui/core';
import { PayloadAction } from 'typesafe-actions';
import WorldMap from './WorldMap';

export interface MapWrapperStateProps {
  isLoading: boolean | null;
  error: Error | null;
  data: {
    countryIds: string[] | null;
    centroid: number[];
  };
}

export interface MapWrapperDispatchProps {
  updateCoords: (coords: number[]) => PayloadAction<'UPDATE_COORDS', number[]>;
}

type MapWrapperProps = MapWrapperStateProps & MapWrapperDispatchProps;

const MapWrapper: FC<MapWrapperProps> = ({
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

  return <WorldMap data={data} updateCoords={updateCoords} />;
};

export default MapWrapper;
