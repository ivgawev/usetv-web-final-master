import { HttpMethod } from '@/domain/http'

export interface HttpRequest {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}
