import styles from './Genres.module.css';
import {GenresToggle} from '../../../../state/state';
import { ReactElement } from 'react';

interface IGenres {
	genreList: typeof GenresToggle;
	onGenreClick: (id : number) => void;
}

function Genres({genreList, onGenreClick}: IGenres): ReactElement {	
	return (
		<ul className={styles.genreList}>
			{genreList.map((item) => (
				<li
					key={item.id}
					onClick={onGenreClick.bind(this, item.id)}
					className={`${styles.genre} ${item.active ? styles.active : ''}`}
				>
					{item.title}
				</li>
			))}
		</ul>
	);
}

export default Genres;
