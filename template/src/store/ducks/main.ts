
import Immutable from 'seamless-immutable'
import { createActions, createReducer } from 'reduxsauce'

const initialState = Immutable({
  title: ''
})

const { Types, Creators } = createActions({
  setTitleRequest: [],
  setTitleSuccess: ['title'],
  setTitleFailure: []
})

const setTitleRequest = (state = initialState) => state.merge({})

const setTitleSuccess = (state = initialState, { title }) => state.merge({
  title
})

const setTitleFailure = (state = initialState) => state.merge({})

const handlers = {
  [Types.SET_TITLE_REQUEST]: setTitleRequest,
  [Types.SET_TITLE_SUCCESS]: setTitleSuccess,
  [Types.SET_TITLE_FAILURE]: setTitleFailure
}

const main = createReducer(initialState, handlers)

export const MainTypes = Types
export const MainActions = Creators

export default main
