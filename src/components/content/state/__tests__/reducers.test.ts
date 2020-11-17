import reducer from '../reducers';
import initialState from '../initialState';
import {
  GET_NAME_INFO_FAIL,
  GET_NAME_INFO_SUCCESS,
  GET_NAME_INFO,
  TOGGLE_MOBILE_OPEN
} from '../actions';

describe('Content reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_NAME_INFO', () =>
    expect(
      reducer(initialState, {
        type: GET_NAME_INFO
      })
    ).toEqual({
      ...initialState,
      isLoading: true
    }));

  it('should handle GET_NAME_INFO_FAIL', () =>
    expect(
      reducer(initialState, {
        type: GET_NAME_INFO_FAIL,
        Error
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: {
        Error,
        type: GET_NAME_INFO_FAIL
      }
    }));

  it('should handle GET_NAME_INFO_SUCCESS', () =>
    expect(
      reducer(initialState, {
        type: GET_NAME_INFO_SUCCESS,
        payload: {
          age: 44,
          countries: [{ countryName: 'Serbia', namePopularity: 0.08787 }],
          countryIds: ['RS', 'HR', 'DE'],
          maleShare: 22,
          name: 'John'
        }
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      nameInfo: {
        age: 44,
        countries: [{ countryName: 'Serbia', namePopularity: 0.08787 }],
        countryIds: ['RS', 'HR', 'DE'],
        maleShare: 22,
        name: 'John'
      }
    }));

  it('should handle TOGGLE_MOBILE_OPEN', () =>
    expect(
      reducer(initialState, {
        type: TOGGLE_MOBILE_OPEN
      })
    ).toEqual({
      ...initialState,
      mobileOpen: !initialState.mobileOpen
    }));
});
