import { ReactElement } from 'react';
import styles from './Movie.module.css';

export interface IMovie {
	id: string;
	name: string;
	genre: string;
	genreId: number[];
	year: number;
	img: string;
}

const Movie = ({name, img, year}: IMovie): ReactElement => {
	return (
		<div className={styles.movie}>
			<div className={styles.imgWrapper}>
				<img src={img} alt={name} className={styles.img}></img>
			</div>
			<div className={styles.content}>
				<div className={styles.discription}>
					<div className={styles.title}>{name}</div>
					<div className={styles.genre}>{name}</div>
				</div>
				<div className={styles.year}>{year}</div>
			</div>
		</div>
	);
};

export default Movie;
