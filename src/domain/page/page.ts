export interface Page<T> {
  page: number
  results: Array<T>
  totalPages: number
  totalResults: number
}
