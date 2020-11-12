import { createReducer } from 'typesafe-actions';
import {
  GET_NAME_INFO_FAIL,
  GET_NAME_INFO_SUCCESS,
  GET_NAME_INFO
} from './actions';
import initialState from './initialState';

export default createReducer(initialState, {
  [GET_NAME_INFO]: (state) => ({
    ...state,
    isLoading: true,
    error: null
  }),
  [GET_NAME_INFO_FAIL]: (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload
  }),
  [GET_NAME_INFO_SUCCESS]: (state, { payload }) => ({
    ...state,
    nameInfo: {
      ...payload
    },
    isLoading: false,
    error: null
  })
});
