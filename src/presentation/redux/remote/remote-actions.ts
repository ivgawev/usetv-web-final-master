import { RemoteRepository } from '@/domain/remote'

export enum RemoteAction {
  SET_REMOTE = 'SET_REMOTE',
  SET_PENDING = 'SET_PENDING',
  SET_SUCCESS = 'SET_SUCCESS',
  SET_ERROR = 'SET_ERROR'
}

export const setRemote = <T>(id: string, remoteRepository: RemoteRepository<T>, params: RemoteRepository.Params) =>
  ({ type: RemoteAction.SET_REMOTE, payload: { id, remoteRepository, params } } as const)
export type setRemoteAction = ReturnType<typeof setRemote>

export const setRemotePending = (id: string) => ({ type: RemoteAction.SET_PENDING, payload: { id } } as const)
export type SetRemotePendingAction = ReturnType<typeof setRemotePending>

export const setRemoteSuccess = <T>(id: string, data: T) => ({ type: RemoteAction.SET_SUCCESS, payload: { id, data } } as const)
export type SetRemoteSuccessAction = ReturnType<typeof setRemoteSuccess>

export const setRemoteError = (id: string, error: string) => ({ type: RemoteAction.SET_ERROR, payload: { id, error } } as const)
export type SetRemoteErrorAction = ReturnType<typeof setRemoteError>

export type RemoteActions = SetRemotePendingAction | SetRemoteSuccessAction | SetRemoteErrorAction
