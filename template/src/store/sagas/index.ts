import { all } from 'redux-saga/effects'

import main from './main'

function* rootSaga() {
  return yield all([main])
}

export default rootSaga
