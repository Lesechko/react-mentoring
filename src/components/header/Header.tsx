import {ReactElement} from 'react';
import {Button, BUTTON_TYPES} from '../common/button';
import {Logo} from '../common/logo';
import {Search} from '../common/search';
import styles from './Header.module.css';

const Header = (): ReactElement => {
	const onSearch = (searchTxt: string) => {
		console.log(searchTxt);
	};

	const onAddClick = () => {
		alert('Create new Movie');
	};

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<Logo />
					<Button type={BUTTON_TYPES.TRANSPARENT} onClick={onAddClick}>
						+ Add movie
					</Button>
				</div>
				<div className={styles.content}>
					<div className={styles.title}>Find your movie</div>
					<Search
						placeholder="What do you want to watch ?"
						actionName="Search"
						onSearch={onSearch}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
