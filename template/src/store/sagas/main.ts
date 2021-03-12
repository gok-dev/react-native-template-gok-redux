import { takeLatest, put, all } from 'redux-saga/effects'

import { MainActions, MainTypes } from 'store/ducks/main'

function* setTitle() {
  try {
    yield put(MainActions.setTitleSuccess('Bem-vindo ao Template com TypeScript e Redux!'))
  } catch {
    yield put(MainActions.setTitleFailure())
  }
}

export default all([takeLatest(MainTypes.SET_TITLE_REQUEST, setTitle)])
