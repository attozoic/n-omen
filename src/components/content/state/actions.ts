import { createAction } from 'typesafe-actions';

export const GET_NAME_INFO = 'GET_NAME_INFO';
export const GET_NAME_INFO_SUCCESS = 'GET_NAME_INFO_SUCCESS';
export const GET_NAME_INFO_FAIL = 'GET_NAME_INFO_FAIL';

export const getNameInfo = createAction(GET_NAME_INFO);
export const getNameInfoSuccess = createAction(
  GET_NAME_INFO_SUCCESS,
  (data) => data
)();
export const getNameInfoFail = createAction(GET_NAME_INFO_FAIL)<Error>();
