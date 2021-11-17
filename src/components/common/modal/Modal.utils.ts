import * as Yup from 'yup'
import { GenreItems } from '../../main/navbar/genres/GenresConstants'
import { ISelectData } from '../select/Select'
import { IMovieForm } from './Modal'

export const getValidation = () =>
  Yup.object({
    title: Yup.string()
      .min(3, 'Mast be 3 characters or more')
      .required('Title is equired'),
    poster_path: Yup.string()
      .url('Enter valid url path')
      .required('Poster path is Required'),
    genre: Yup.string()
      .min(3, 'Mast be 3 characters or more')
      .required('Genres us Required'),
    release_date: Yup.date().required('Release date is equired'),
    vote_average: Yup.number().required('Required'),
    runtime: Yup.number().required('Required'),
    overview: Yup.string()
      .min(15, 'Mast be 15 characters or more')
      .required('Required'),
  })

export const getInitialMovieForm = (movie: any = {}): IMovieForm => {
  const movieForm: IMovieForm = {
    title: movie?.title || '',
    poster_path: movie?.poster_path || '',
    genre: movie?.genres?.[0] || '',
    release_date: movie?.release_date || '',
    vote_average: movie?.vote_average || 0,
    runtime: movie?.runtime || 0,
    overview: movie?.overview || '',
  }

  movie?.id && (movieForm.id = movie.id)

  return movieForm
}

export const getGenresTemplate = () =>
  GenreItems.filter((g) => g.value).map(
    ({ id, value }) => ({ id: String(id), title: value } as ISelectData),
  )
