import styles from './Logo.module.css';
import {ReactElement} from 'react';

const Logo = (): ReactElement => {
	return (
		<div className={styles.logo}>
			<span> netflix</span>roulette
		</div>
	);
};

export default Logo;
