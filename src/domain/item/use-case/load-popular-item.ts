import { Language } from '@/domain/language'
import { Page } from '@/domain/page'
import { Item } from '@/domain/item'
import { RemoteRepository } from '@/domain/remote'

export type LoadPopularItem = RemoteRepository<LoadPopularItem.Params, LoadPopularItem.Response>

export namespace LoadPopularItem {
  export interface Params extends RemoteRepository.Params {
    language?: Language
    page?: number
  }

  export type Response = Page<Item>
}
