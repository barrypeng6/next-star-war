import { all } from 'redux-saga/effects'

import { watchGetPagesFlow } from './getPagesFlow'

function* rootSaga() {
  yield all([
    watchGetPagesFlow()
  ])
}

export default rootSaga