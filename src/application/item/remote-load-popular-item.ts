import { RemoteService } from '@/domain/remote'
import { LoadPopularItem } from '@/domain/item/use-case'
import { HttpMethod } from '@/domain/http'

export class RemoteLoadPopularItem extends RemoteService<LoadPopularItem.Response> implements LoadPopularItem {
  async load(): Promise<LoadPopularItem.Response> {
    return await this.execute({ method: HttpMethod.GET })
  }
}
