import {ReactElement} from 'react';
import styles from './App.module.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App(): ReactElement {
	return (
		<ErrorBoundary>
			<div className={styles.app}>
				<Header />
				<div className={styles.separator} />
				<Main />
				<Footer />
			</div>
		</ErrorBoundary>
	);
}

export default App;
