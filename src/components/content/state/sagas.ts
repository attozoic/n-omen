import { all, put, takeEvery } from 'redux-saga/effects';
import getNameInfoApi from '../../../data/api';
import { getNameInfoFail, getNameInfoSuccess, GET_NAME_INFO } from './actions';

export function* getNameInfo$(): Generator {
  try {
    const response = yield getNameInfoApi();

    yield put(getNameInfoSuccess(response));
  } catch (error) {
    yield put(getNameInfoFail(error));
  }
}

export default function* content(): Generator {
  yield all([takeEvery(GET_NAME_INFO, getNameInfo$)]);
}
