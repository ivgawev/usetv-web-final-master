import { HttpStatusCode } from '@/domain/http'

export interface HttpResponse<T = any> {
  statusCode: HttpStatusCode
  body?: T
}
