import { ReactElement } from 'react';
import Movie, {IMovie} from './movie/Movie';
import styles from './MovieList.module.css';

interface IMovieList {
	list: IMovie[];
}

const MovieList = ({list}: IMovieList): ReactElement => {
	if (!list) {
		return null;
	}

	return (
		<div className={styles['movie-list']}>
			{list.map(({name, genre, genreId, year, img, id}) => (
				<Movie
					name={name}
					genre={genre}
					genreId={genreId}
					year={year}
					img={img}
					key={id}
					id={id}
				/>
			))}
		</div>
	);
};

export default MovieList;
