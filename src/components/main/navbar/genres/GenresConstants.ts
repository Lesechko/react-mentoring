export interface IGenreItem {
  id: number
  title: string
  active: boolean
  value: string | null
}

export const GenreItems: IGenreItem[] = [
  { id: 0, title: 'All', active: true, value: null },
  { id: 1, title: 'Documentary', active: false, value: 'Documentary' },
  { id: 2, title: 'Comedy', active: false, value: 'Comedy' },
  { id: 3, title: 'Adventure', active: false, value: 'Adventure' },
  { id: 4, title: 'Crime', active: false, value: 'Crime' },
]
