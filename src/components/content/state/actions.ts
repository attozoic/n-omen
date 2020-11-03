import { createStandardAction } from "typesafe-actions/dist/deprecated/create-standard-action";

export const GET_NAME_INFO = "GET_NAME_INFO";
export const GET_NAME_INFO_SUCCESS = "GET_NAME_INFO_SUCCESS";
export const GET_NAME_INFO_FAIL = "GET_NAME_INFO_FAIL";

export const getNameInfo = createStandardAction(GET_NAME_INFO)<undefined>();
export const getNameInfoSuccess = createStandardAction(GET_NAME_INFO_SUCCESS)<
  boolean
>();
export const getNameInfoFail = createStandardAction(GET_NAME_INFO_FAIL)<
  Error
>();
