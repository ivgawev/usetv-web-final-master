import { ApiUrlPath } from '@/domain/api'

export interface RemoteRepository<Params = any, Response = any> {
  load: (params: RemoteRepository.Params & Params) => Promise<Response>
}

export namespace RemoteRepository {
  export interface Params {
    apiUrlPath: ApiUrlPath
  }
}
