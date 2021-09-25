import { HttpClient, HttpStatusCode } from '@/domain/http'
import { HttpErrorHandler } from '@/domain/http/http-error-handler'
import { HttpRequest } from '@/domain/http/http-request'

export abstract class RemoteService<T> {
  protected readonly url: string
  protected readonly httpClient: HttpClient<T>

  constructor(url: string, httpClient: HttpClient<T>) {
    this.url = url
    this.httpClient = httpClient
  }

  async execute(request: Omit<HttpRequest, 'url'>): Promise<T> {
    const response = await this.httpClient.request({
      url: this.url,
      method: request.method,
      body: request.body,
      headers: request.headers
    })

    const { statusCode, body } = response
    if (statusCode === HttpStatusCode.OK && body) {
      return body
    }

    throw HttpErrorHandler.handle(statusCode)
  }
}
