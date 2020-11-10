import { createReducer } from 'typesafe-actions';
import { UPDATE_COORDS } from './actions';
import initialState from './initialState';

export default createReducer(initialState, {
  [UPDATE_COORDS]: (state, payload) => ({
    ...state,
    coords: payload.payload
  })
});
