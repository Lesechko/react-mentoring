import styles from './Button.module.css';
import {ReactElement, ReactNode} from 'react';
import {BUTTON_TYPES} from './buttonTypes';

interface IButton {
	type: BUTTON_TYPES;
	children: ReactNode;
	onClick: () => void;
}

function Button(props: IButton): ReactElement {
	const className =
		props.type === BUTTON_TYPES.COMPLETE ? 'btn-complete' : 'btn-transperent';
	return (
		<span className={styles[className]} onClick={props.onClick}>
			{props.children}
		</span>
	);
}

export default Button;
