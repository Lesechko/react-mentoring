export interface ISortingItem {
  id: number
  value: string
}

export const sortingItem: ISortingItem[] = [
  { value: 'release date', id: 1 },
  { value: 'runtime', id: 2 },
  { value: 'rating', id: 3 },
]
