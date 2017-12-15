import {
  takeEvery,
  call,
  put
} from 'redux-saga/effects';
import {
  getPagesSuccessAction,
  getPagesFailureAction
} from '../actions';

import wait from '../api';



const pages = [
  { id: 1, name: 'Page One' },
  { id: 2, name: 'Page Two' },
  { id: 3, name: 'Page Three' },
  { id: 4, name: 'Page Four' },
  { id: 5, name: 'Page Five' },
]

export function* watchGetPagesFlow() {
  yield takeEvery('GET_PAGES_REQUEST', getPagesFlow)
}

export function* getPagesFlow(action) {
  try {
    const res = yield call(wait, pages);
    if(res.status < 400) {
      const data = yield res.json();
      console.log('data: ', data)
      yield put(getPagesSuccessAction(data))
    } else {
      alert('network error')
    }
  } catch(error) {
    yield put(getPagesFailureAction())
  }
}