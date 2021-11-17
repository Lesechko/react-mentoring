import { ISortingItem } from '../src/components/common/sorting/Sorting.constants'
import { IMovie } from '../src/components/movieList/movie/Movie'
import { IMovieState } from '../src/redux/reducers/moviesReducer'

export const movie: IMovie = {
  id: 238713,
  title: 'Spy',
  tagline: 'One of the guys. One of the Spies.',
  vote_average: 6.8,
  vote_count: 3058,
  release_date: '2015-05-06',
  poster_path:
    'https://image.tmdb.org/t/p/w500/xaOq0BnMHl445iZ4B7szBzaWgjS.jpg',
  overview:
    'A desk-bound CIA analyst volunteers to go',
  budget: 65000000,
  revenue: 235666219,
  genres: ['Action', 'Comedy', 'Crime'],
  runtime: 120,
}

export const newMovie = {
  id: 346,
  title: 'Seven Samurai',
  tagline:
    'The Mighty Warriors Who Became the Seven National Heroes of a Small Town',
  vote_average: 8.2,
  vote_count: 1088,
  release_date: '1954-04-26',
  poster_path:
    'https://image.tmdb.org/t/p/w500/v6xrz4fr92KY1oNC3HsEvrsvR1n.jpg',
  overview:
    "A samurai answers a village's request for protection after he falls on hard times. ",
  budget: 2000000,
  revenue: 271841,
  genres: ['Action', 'Drama'],
  runtime: 207,
}

export const mockMovieState: IMovieState = {
  movieList: [movie],
  activeMovie: movie,
}


export const sortingItem: ISortingItem[] = [
  { id: 1, value: 'release_date', title: 'release date' },
  { id: 2, value: 'runtime', title: 'runtime' },
  { id: 3, value: 'vote_average', title: 'rating' },
]
