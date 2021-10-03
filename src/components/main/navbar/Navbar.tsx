import styles from './Navbar.module.css';
import {Genres} from './genres';
import {GenresToggle} from '../../../state/state';
import { ReactElement } from 'react';

interface INavbar {
	genres: typeof GenresToggle;
	onGenreClick: (id : number) => void;
}

const Navbar = (props: INavbar): ReactElement=> {
	return (
		<div className={styles.wrapper}>
			<div className={styles.navbar}>
				<Genres
					genreList={props.genres}
					onGenreClick={props.onGenreClick}
				></Genres>
				<div>sorting</div>
			</div>
			<div className={styles.line} />
		</div>
	);
}

export default Navbar;
