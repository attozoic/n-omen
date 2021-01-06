import React, { FC } from 'react';
import { PayloadAction } from 'typesafe-actions';
import WorldMap from './WorldMap';

export interface MapWrapperStateProps {
  data: {
    countryIds: string[] | null;
    centroid: number[];
    haveContent: boolean;
  };
}

export interface MapWrapperDispatchProps {
  updateCoords: (coords: number[]) => PayloadAction<'UPDATE_COORDS', number[]>;
}

type MapWrapperProps = MapWrapperStateProps & MapWrapperDispatchProps;

const MapWrapper: FC<MapWrapperProps> = ({ data, updateCoords }) => {
  return <WorldMap data={data} updateCoords={updateCoords} />;
};

export default MapWrapper;
