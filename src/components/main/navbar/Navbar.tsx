import styles from './Navbar.module.css';
import {Genres} from './genres';
import {GenresToggle, sortingItem} from '../../../state/state';
import {ReactElement} from 'react';
import {Sorting} from '../../common';
import { SortingType } from '../../../utils/sortingUtils';

interface INavbar {
	genres: typeof GenresToggle;
	onGenreClick: (id: number) => void;
	onSortChange: (id: number, sortType: SortingType) => void;
}

const Navbar = ({
	genres,
	onGenreClick,
	onSortChange,
}: INavbar): ReactElement => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.navbar}>
				<Genres genreList={genres} onGenreClick={onGenreClick}></Genres>
				<Sorting
					sortingItem={sortingItem}
					onItemTriggered={onSortChange}
				></Sorting>
			</div>
			<div className={styles.line} />
		</div>
	);
};

export default Navbar;
