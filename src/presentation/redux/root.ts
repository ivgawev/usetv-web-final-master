import { combineReducers } from 'redux'
import { loadRemote, RemoteAction, RemoteReducer } from '@/presentation/redux/remote'
import { all, takeEvery } from '@redux-saga/core/effects'

export const rootReducer = combineReducers({
  remotes: RemoteReducer
})

export function* rootSaga() {
  yield all([takeEvery(RemoteAction.SET_REMOTE, loadRemote)])
}
