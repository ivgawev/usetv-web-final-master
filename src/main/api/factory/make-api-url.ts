import { ApiUrl, ApiUrlPaths, ApiUrlQueryParam } from '@/domain/api'
import { MissingParamError } from '@/domain/error'
import { HttpUrlQuery } from '@/domain/http'

interface MakeApiQueryUrlParams {
  paths: ApiUrlPaths[]
  params?: HttpUrlQuery
  version?: string
}

export function makeApiUrl({ paths, params, version }: MakeApiQueryUrlParams): string {
  let url = ApiUrl.getBaseUrl(version)

  for (const path of paths) {
    url = ApiUrl.addPath(url, path)
  }

  const apiKey = process.env.API_KEY
  if (apiKey) {
    const apiKeyQuery: HttpUrlQuery = { [ApiUrlQueryParam.API_KEY]: process.env.API_KEY! }
    url = ApiUrl.addQueryParams(url, { ...params, ...apiKeyQuery })
    return url
  }

  throw new MissingParamError('API_KEY')
}
