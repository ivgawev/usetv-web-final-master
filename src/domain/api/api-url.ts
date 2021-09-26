import { ApiUrlPaths } from '@/domain/api'
import { HttpUrlQuery } from '@/domain/http'

export class ApiUrl {
  static getBaseUrl(version?: string): string {
    return `${process.env.API_URL}${version || process.env.API_VERSION}`
  }

  static addPath(url: string, path: ApiUrlPaths): string {
    if (path[0] === '/') return `${url}${path}`
    return `${url}/${path}`
  }

  static addQueryParams(url: string, params: HttpUrlQuery): string {
    const entries = Object.entries(params)

    let paramsString = ''
    for (const [param, value] of entries) {
      if (value !== undefined) {
        if (!paramsString) paramsString += param
        else paramsString += `&${param}`
        paramsString += `=${String(value)}`
      }
    }

    return entries.length > 0 && paramsString ? `${url}?${paramsString}` : url
  }
}
