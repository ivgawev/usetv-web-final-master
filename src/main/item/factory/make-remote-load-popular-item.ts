import { LoadPopularItem } from '@/domain/item/use-case'
import { ApiItemUrlPath, ApiItemUrlQueryParam, ApiUrlQueryParam } from '@/domain/api'
import { makeApiUrl } from '@/main/api/factory'
import { RemoteLoadPopularItem } from '@/application/item'
import { makeAxiosHttpClient } from '@/main/http/factory'

export function makeRemoteLoadPopularItem(params: LoadPopularItem.Params): LoadPopularItem {
  const paths = [params.apiUrlPath, ApiItemUrlPath.POPULAR]
  const queryParams = { [ApiUrlQueryParam.LANGUAGE]: params.language, [ApiItemUrlQueryParam.PAGE]: params.page }
  const url = makeApiUrl({ paths, params: queryParams })
  return new RemoteLoadPopularItem(url, makeAxiosHttpClient())
}
