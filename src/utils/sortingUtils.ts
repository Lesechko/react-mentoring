import {IMovie} from '../components/movieList/movie/Movie';

export enum SortingType {
	UP,
	DOWN,
}

export enum SortingKey {
	Rating = 'rating',
	Year = 'year',
	Runtime = 'runtime',
}

export const getSortedMovies = (
	movies: IMovie[],
	id: number,
	sortingType: SortingType
): IMovie[] => {
	switch (id) {
		case 1:
			return sortByReleaseDate(movies, sortingType);
		case 2:
			return sortByRating(movies, sortingType);
		case 3:
			return sortByRuntime(movies, sortingType);
		default:
			return movies;
	}
};

const sortMovieList = (
	movies: any[],
	sortingType: SortingType,
	key: string
) => {
	return [...movies].sort((a, b) => {
		if (!a[key] || !b[key]) {
			return -1;
		}

		return sortingType === SortingType.UP ? a[key] - b[key] : b[key] - a[key];
	});
};

const sortByRating = (movies: IMovie[], sortingType: SortingType) =>
	sortMovieList(movies, sortingType, SortingKey.Rating);

const sortByReleaseDate = (movies: IMovie[], sortingType: SortingType) =>
	sortMovieList(movies, sortingType, SortingKey.Year);

const sortByRuntime = (movies: IMovie[], sortingType: SortingType) =>
	sortMovieList(movies, sortingType, SortingKey.Runtime);
