import { RemoteRepository } from '@/domain/remote'
import { setRemoteError, setRemotePending, setRemoteAction, setRemoteSuccess } from '@/presentation/redux/remote'
import { call, put } from '@redux-saga/core/effects'

const resolveRemote = (remoteRepository: RemoteRepository, params: RemoteRepository.Params) =>
  remoteRepository
    .load(params)
    .then((response) => response)
    .catch((error) => error)

export function* loadRemote({ payload: { id, remoteRepository, params } }: setRemoteAction) {
  try {
    yield put(setRemotePending(id))
    if (remoteRepository) {
      const response: RemoteRepository.Params = yield call(resolveRemote, remoteRepository, params)
      console.log(response)
      yield put(setRemoteSuccess(id, response))
    }
  } catch (error: any) {
    yield put(setRemoteError(id, error.message))
  }
}
