import reducer from '../reducers';
import initialState from '../initialState';
import { UPDATE_COORDS } from '../actions';

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
});
