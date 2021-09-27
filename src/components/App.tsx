import {ReactElement} from 'react';
import styles from './App.module.css';
import Header from './header/Header';
import Main from './main/Main';

function App(): ReactElement {
	return (
		<div>
			<Header/>
			<div className={styles.separator} />
			<Main />
		</div>
	);
}

export default App;
