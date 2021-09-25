import { HttpRequest, HttpResponse } from '@/domain/http'

export interface HttpClient<T = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<T>>
}
