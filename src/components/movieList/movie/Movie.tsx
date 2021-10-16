import { ReactElement } from 'react';
import styles from './Movie.module.css';

export interface IMovie {
	id: string;
	name: string;
	genre: string;
	release: number;
	img: string;
	genreId?: number[];
	runtime? : number;
	rating? : number
	overview?: string
}

export interface IMovieProps {
	movie : IMovie,
	onClick : (movie : IMovie) => void;
}

const Movie = ({movie, onClick}: IMovieProps): ReactElement => {
	return (
		<div className={styles.movie} onClick = {() => onClick(movie)}>
			<div className={styles.imgWrapper}>
				<img src={movie.img} alt={movie.name} className={styles.img}></img>
			</div>
			<div className={styles.content}>
				<div className={styles.discription}>
					<div className={styles.title}>{movie.name}</div>
					<div className={styles.genre}>{movie.name}</div>
				</div>
				<div className={styles.year}>{movie.release}</div>
			</div>
		</div>
	);
};

export default Movie;
