import { createAction } from 'typesafe-actions';

export const UPDATE_COORDS = 'UPDATE_COORDS';

export const updateCoords = createAction(
  UPDATE_COORDS,
  (coords: number[]) => coords
)<number[]>();
