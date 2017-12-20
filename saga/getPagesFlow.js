import {
  takeEvery,
  call,
  put
} from 'redux-saga/effects';
import {
  getPagesSuccessAction,
  getPagesFailureAction
} from '../actions';

import { wait } from '../api';

export function* watchGetPagesFlow() {
  yield takeEvery('GET_PAGES_REQUEST', getPagesFlow)
}

export function* getPagesFlow(action) {
  try {
    const data = yield call(wait, 2000);
    console.log('data: ', data)
    yield put(getPagesSuccessAction(data))
  } catch(error) {
    yield put(getPagesFailureAction())
  }
}