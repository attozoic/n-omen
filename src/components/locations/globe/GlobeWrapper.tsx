import React, { FC } from 'react';
import { LinearProgress } from '@material-ui/core';
import Globe from './Globe';

export interface GlobeWrapperProps {
  isLoading: boolean | null;
  error: Error | null;
  data: {
    coords: number[];
  };
}

const GlobeWrapper: FC<GlobeWrapperProps> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <LinearProgress />;
  }

  if (error != null) {
    return <div>Error component</div>;
  }

  return <Globe data={data} />;
};

export default GlobeWrapper;
