import { createReducer } from 'typesafe-actions';
import {
  GET_NAME_INFO_FAIL,
  GET_NAME_INFO_SUCCESS,
  GET_NAME_INFO,
  TOGGLE_MOBILE_OPEN
} from './actions';
import initialState from './initialState';

export default createReducer(initialState, {
  [GET_NAME_INFO]: (state) => ({
    ...state,
    isLoading: true,
    firstSearchDone: true,
    error: null,
    haveContent: false
  }),
  [TOGGLE_MOBILE_OPEN]: (state) => ({
    ...state,
    mobileOpen: !state.mobileOpen
  }),
  [GET_NAME_INFO_FAIL]: (state, { payload }) => ({
    ...initialState,
    firstSearchDone: true,
    error: payload
  }),
  [GET_NAME_INFO_SUCCESS]: (state, { payload }) => ({
    ...state,
    nameInfo: {
      ...payload
    },
    haveContent: true,
    isLoading: false,
    error: null
  })
});
