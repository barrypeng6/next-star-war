import {
  takeEvery,
  call,
  put
} from 'redux-saga/effects';
import {
  getSettingSuccessAction,
  getSettingFailureAction
} from '../actions';

import {
  fetchAllSettings
} from '../api';

export function* watchGetSettingFlow() {
  yield takeEvery('GET_SETTING_REQUEST', getSettingFlow)
}

export function* getSettingFlow(action) {
  try {
    const data = yield fetchAllSettings();
    console.log('>>data: ', data)
    yield put(getSettingSuccessAction(data))
  } catch(error) {
    console.log('ERROR>>', error)
    yield put(getSettingFailureAction())
  }
}