import { HttpRequest, HttpResponse, HttpClient } from '@/domain/http'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let response: AxiosResponse

    try {
      const { url, method, body, headers } = data
      response = await axios.request({ url, method, data: body, headers })
    } catch (error: any) {
      response = error.response
    }

    return {
      statusCode: response.status,
      body: response.data
    }
  }
}
