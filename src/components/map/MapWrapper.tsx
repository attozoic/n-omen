import React, { FC } from 'react';
import { LinearProgress } from '@material-ui/core';
import WorldMap from './WorldMap';

interface MapWrapperProps {
  isLoading: boolean | null;
  error: Error | null;
  data: {
    countryIds: string[] | null;
    globeCoords: number[];
  };
}

const MapWrapper: FC<MapWrapperProps> = (props) => {
  const { data, isLoading, error } = props;

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error != null) {
    return <div>Error component</div>;
  }

  return <WorldMap data={data} />;
};

export default MapWrapper;
