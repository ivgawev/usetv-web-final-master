import { Item } from '@/domain/item'
import { ApiUrlPath } from '@/domain/api'

export interface Movie extends Item {
  apiUrlPath: ApiUrlPath.MOVIES
}
