import {Button} from '..';
import {BUTTON_TYPES} from '../button';
import {ReactElement, useState} from 'react';

import styles from './Search.module.css';

interface ISearch {
	onSearch(string: string): void;
	placeholder: string;
	actionName: string;
}

const Search = (props: ISearch): ReactElement => {
	const [value, setValue] = useState('');

	const onSearch = () => {
		props.onSearch(value);
	};

	return (
		<div className={styles.search}>
			<input
				placeholder={props.placeholder}
				className={styles.input}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button type={BUTTON_TYPES.COMPLETE} onClick={onSearch}>
				{props.actionName}
			</Button>
		</div>
	);
};

export default Search;
