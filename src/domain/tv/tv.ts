import { Item } from '@/domain/item'
import { ApiUrlPath } from '@/domain/api'

export interface Tv extends Item {
  apiUrlPath: ApiUrlPath.TV
}
