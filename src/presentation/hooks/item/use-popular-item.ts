import { Language } from '@/domain/language'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { RootState } from '@/presentation/redux'
import { RemoteReducerState, setRemote } from '@/presentation/redux/remote'
import { LoadPopularItem } from '@/domain/item/use-case'
import { ApiUrlPath } from '@/domain/api'
import { makeRemoteLoadPopularItem } from '@/main/item/factory'

export enum ItemType {
  MOVIE = 'movie',
  TV = 'tv'
}

interface UsePopularItemsParams {
  type: ItemType
  path: ApiUrlPath
  language?: Language
  page?: number
  initialize?: boolean
}

export const usePopularItems = (
  params: UsePopularItemsParams = {
    type: ItemType.MOVIE,
    path: ApiUrlPath.MOVIES,
    language: Language.SPANISH,
    page: 1,
    initialize: false
  }
) => {
  const dispatch = useDispatch()
  const remotes = useSelector((state: RootState) => state.remotes as RemoteReducerState)

  const load = useCallback(() => {
    const itemParams: LoadPopularItem.Params = { apiUrlPath: params.path, language: params.language, page: params.page }
    dispatch(setRemote(params.type, makeRemoteLoadPopularItem(itemParams), itemParams))
  }, [dispatch, params.language, params.page, params.path, params.type])

  useEffect(() => {
    if (params.initialize) {
      load()
    }
  }, [load, params.initialize])

  return { type: params.type, items: remotes[params.type]?.data?.results, load, page: params.page }
}
