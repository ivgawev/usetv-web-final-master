import { Id } from '@/domain/id'

export interface Item extends Id {
  title: string
  posterPath: string
  overview: string
  voteAverage: number
}
