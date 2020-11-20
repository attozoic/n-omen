import { createAction } from 'typesafe-actions';

export const UPDATE_COORDS = 'UPDATE_COORDS';
export const UPDATE_CENTROID = 'UPDATE_CENTROID';

export const updateCoords = createAction(
  UPDATE_COORDS,
  (coords: number[]) => coords
)<number[]>();

export const updateCentroid = createAction(
  UPDATE_CENTROID,
  (centroid: number[]) => centroid
)<number[]>();
