import {Component, JSXElementConstructor, ReactElement, ReactNode} from 'react';
import styles from './ErrorBoundary.css';

interface Props {
	children: ReactElement;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	state: Readonly<State> = {
		hasError: false,
	};

	static getDerivedStateFromError() {
		return {hasError: true};
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.log('Loging', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className={styles.error}>
					<h1 className={styles.txt}>Sorry, something was wrong....</h1>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
