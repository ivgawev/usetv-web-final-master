import { ApiUrlPath } from '@/domain/api'
import { Language } from '@/domain/language'
import { Page } from '@/domain/page'
import { Item } from '@/domain/item'

export interface LoadPopularItem {
  load: () => Promise<LoadPopularItem.Response>
}

export namespace LoadPopularItem {
  export interface Params {
    apiUrlPath: ApiUrlPath
    language?: Language
    page?: number
  }

  export type Response = Page<Item>
}
