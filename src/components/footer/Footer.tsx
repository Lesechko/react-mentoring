import {ReactElement} from 'react';
import {Logo} from '../common/logo';

import styles from './Footer.module.css';

const Footer = (): ReactElement => {
	return (
		<div className={styles.footer}>
			<Logo />
		</div>
	);
};

export default Footer;
