import React, { FC } from 'react';
import Globe from './Globe';

export interface GlobeWrapperProps {
  data: {
    coords: number[];
  };
}

const GlobeWrapper: FC<GlobeWrapperProps> = ({ data }) => {
  return <Globe data={data} />;
};

export default GlobeWrapper;
