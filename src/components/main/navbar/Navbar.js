import styles from './Navbar.module.css';
import {Genres} from './genres'

function Navbar(props) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.navbar}>
				<Genres genreList = {props.genres} onGenreClick = {props.onGenreClick}></Genres>
				<div>sorting</div>
			</div>
			<div className={styles.line}/>
		</div>
	);
}

export default Navbar;
