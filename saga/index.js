import { all } from 'redux-saga/effects'

import { watchGetPagesFlow } from './getPagesFlow'
import { watchGetSettingFlow } from './getSettingFlow'

function* rootSaga() {
  yield all([
    watchGetPagesFlow(),
    watchGetSettingFlow()
  ])
}

export default rootSaga