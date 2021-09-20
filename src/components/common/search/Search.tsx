import {Button} from '..';
import styles from './Search.module.css';
import {BUTTON_TYPES} from '../button';
import React, {useState} from 'react';

interface ISearch {
	onSearch(string: string): void;
	placeholder: string;
	actionName: string;
}

function Search(props: ISearch) {
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
}

export default Search;
