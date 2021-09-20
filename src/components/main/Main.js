import {useState} from 'react';
import {Navbar} from './navbar';
import styles from './Main.module.css';

function Main() {
	const [genres, setGenres] = useState([
		{value: 'All', active: true},
		{value: 'Documentary', active: false},
		{value: 'Comedy', active: false},
		{value: 'Horror', active: false},
		{value: 'Crime', active: false},
	]);

	const onGenreClick = (e) => {
		const updateGenres = genres.map((item) => ({
			...item,
			active: item.value === e.target.textContent,
		}));
		setGenres(updateGenres);
	};

	return (
		<div className={styles.main}>
			<Navbar genres={genres} onGenreClick={onGenreClick} />
		</div>
	);
}

export default Main;
