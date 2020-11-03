import { createReducer } from "typesafe-actions";
import {
  GET_NAME_INFO,
  GET_NAME_INFO_FAIL,
  GET_NAME_INFO_SUCCESS
} from "./actions";
import initialState from "./initialState";

export default createReducer(initialState, {
  [GET_NAME_INFO]: (state) => ({
    ...state,
    isBusy: true,
    error: null
  }),
  [GET_NAME_INFO_FAIL]: (state, { payload }) => ({
    ...state,
    isBusy: false,
    error: payload
  }),
  [GET_NAME_INFO_SUCCESS]: (state, { payload }) => ({
    ...state,
    ...payload,
    isBusy: false,
    error: null
  })
});
