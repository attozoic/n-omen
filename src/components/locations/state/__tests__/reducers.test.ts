import reducer from '../reducers';
import initialState from '../initialState';
import { UPDATE_COORDS, UPDATE_CENTROID, GET_NAME_INFO_FAIL } from '../actions';

describe('Locations reducer', () => {
  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_COORDS action', () => {
    expect(
      reducer(initialState, { type: UPDATE_COORDS, payload: [25, 25] })
    ).toEqual({
      ...initialState,
      coords: [25, 25]
    });
  });

  it('should handle UPDATE_CENTROID action', () => {
    expect(
      reducer(initialState, { type: UPDATE_CENTROID, payload: [25, 25] })
    ).toEqual({
      ...initialState,
      centroid: [25, 25]
    });
  });

  it('should handle GET_NAME_INFO_FAIL action', () => {
    expect(reducer(initialState, { type: GET_NAME_INFO_FAIL })).toEqual({
      ...initialState
    });
  });
});
