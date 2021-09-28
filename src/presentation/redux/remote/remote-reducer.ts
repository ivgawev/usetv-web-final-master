import { RemoteAction, RemoteActions } from '@/presentation/redux/remote'
import { Page } from '@/domain/page'
import { Item } from '@/domain/item'

export type RemoteRequest<T> = {
  data?: T
  pending: boolean
  success: boolean
  error: string
}

export type RemoteReducerState = { [id: string]: RemoteRequest<Page<Item>> }
const INITIAL_STATE: RemoteReducerState = {}

export const RemoteReducer = (state = INITIAL_STATE, action: RemoteActions) => {
  if (!action.payload?.id) return INITIAL_STATE
  const { id } = action.payload

  switch (action.type) {
    case RemoteAction.SET_PENDING: {
      return { ...state, [id]: { data: null, pending: true, success: false, error: null } }
    }

    case RemoteAction.SET_SUCCESS: {
      return { ...state, [id]: { data: action.payload.data, pending: false, success: true, error: null } }
    }

    case RemoteAction.SET_ERROR: {
      return { ...state, [id]: { data: null, pending: false, success: false, error: action.payload.error } }
    }

    default:
      return INITIAL_STATE
  }
}
