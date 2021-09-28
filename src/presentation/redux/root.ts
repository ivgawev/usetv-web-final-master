import { combineReducers } from 'redux'
import { all } from '@redux-saga/core/effects'

export const rootReducer = combineReducers({})

export function* rootSaga(): Generator {
  yield all([])
}
