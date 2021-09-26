import { ApiUrlQueryParams } from '@/domain/api'

export type HttpUrlQuery = { [param in ApiUrlQueryParams]?: string | number | undefined }
