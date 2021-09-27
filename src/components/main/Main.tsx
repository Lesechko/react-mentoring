import {ReactElement, useEffect, useState} from 'react';
import {Navbar} from './navbar';
import {GenresToggle, MovieListItems} from '../../state/state';
import MovieList from '../movieList/MovieList';

import styles from './Main.module.css';

const Main = (): ReactElement => {
	const [genres, setGenres] = useState(GenresToggle);
	const [activeGenresId, setActiveGenresId] = useState(null);
	const [movies, setMovies] = useState<any[]>([]);

	useEffect(() => {
		const activeMovieList = activeGenresId
			? MovieListItems.filter((movie) => movie.genreId.includes(activeGenresId))
			: MovieListItems;
		setMovies(activeMovieList);
	}, [MovieListItems, activeGenresId]);

	const onGenreClick = (id: number) => {
		const updateGenres = genres.map((item) => ({
			...item,
			active: item.id === id,
		}));

		setGenres(updateGenres);
		setActiveGenresId(updateGenres.find((genre) => genre.active)?.id);
	};

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Navbar genres={genres} onGenreClick={onGenreClick} />
				<div className={styles['movies-counter']}>
					<span className={styles['number']}>{movies.length}</span> movies found
				</div>
				<MovieList list={movies}></MovieList>
			</div>
		</div>
	);
};

export default Main;
