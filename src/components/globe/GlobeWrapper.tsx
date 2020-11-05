import React, { FC } from 'react';
import { LinearProgress } from '@material-ui/core';
import Globe from './Globe';

interface GlobeWrapperProps {
  isLoading: boolean | null;
  error: Error | null;
  data: {
    countryIds: string[] | null;
    mapCoords: number[];
  };
}

const GlobeWrapper: FC<GlobeWrapperProps> = (props) => {
  const { data, isLoading, error } = props;

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error != null) {
    return <div>Error component</div>;
  }

  return <Globe data={data} />;
};

export default GlobeWrapper;
