import { createReducer } from 'typesafe-actions';
import { UPDATE_COORDS, UPDATE_CENTROID } from './actions';
import initialState from './initialState';

export default createReducer(initialState, {
  [UPDATE_COORDS]: (state, payload) => ({
    ...state,
    coords: payload.payload
  }),
  [UPDATE_CENTROID]: (state, payload) => ({
    ...state,
    centroid: payload.payload
  })
});
