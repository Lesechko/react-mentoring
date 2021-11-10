export interface ISortingItem {
  id: number
  value: string
  title: string
}

export const sortingItem: ISortingItem[] = [
  { id: 1, value: 'release_date', title: 'release date' },
  { id: 2, value: 'runtime', title: 'runtime' },
  { id: 3, value: 'vote_average', title: 'rating' },
]

export enum SortingType {
  UP = 'asc',
  DOWN = 'desc',
}
