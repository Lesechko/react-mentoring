import styles from './Genres.module.css';

function Genres(props) {
	return (
		<ul className={styles.genreList}>
			{props.genreList.map((item, idx) => (
				<li
					key={idx}
          onClick={props.onGenreClick}
					className={`${styles.genre} ${item.active ? styles.active : ''}`}
				>
					{item.value}
				</li>
			))}
		</ul>
	);
}

export default Genres;
