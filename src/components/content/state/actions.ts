import { createAction } from 'typesafe-actions';

export const GET_NAME_INFO = 'GET_NAME_INFO';
export const GET_NAME_INFO_SUCCESS = 'GET_NAME_INFO_SUCCESS';
export const GET_NAME_INFO_FAIL = 'GET_NAME_INFO_FAIL';
export const TOGGLE_MOBILE_OPEN = 'TOGGLE_MOBILE_OPEN';

export const getNameInfo = createAction(GET_NAME_INFO);
export const toggleMobileOpen = createAction(TOGGLE_MOBILE_OPEN);
export const getNameInfoSuccess = createAction(
  GET_NAME_INFO_SUCCESS,
  (data) => data
)();
export const getNameInfoFail = createAction(GET_NAME_INFO_FAIL)<Error>();
