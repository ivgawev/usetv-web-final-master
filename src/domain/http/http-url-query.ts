import { ApiUrlQueryParam } from '@/domain/api'

export type HttpUrlQuery = { [param in ApiUrlQueryParam]?: string | number | undefined }
