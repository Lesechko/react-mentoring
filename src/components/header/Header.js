import {Button, BUTTON_TYPES} from '../common/button';
import {Logo} from '../common/logo';
import {Search} from '../common/search';
import styles from './Header.module.css';

function Header() {
  const onSearch = (searchTxt) => {
    console.log(searchTxt);
  }


	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<Logo />
					<Button type={BUTTON_TYPES.TRANSPARENT}> + Add movie</Button>
				</div>
				<div className={styles.content}>
					<div className={styles.title}>Find your movie</div>
					<Search placeholder="What do you want to watch ?" actionName = "Search" onSearch={onSearch}/>
				</div>
			</div>
		</header>
	);
}

export default Header;
