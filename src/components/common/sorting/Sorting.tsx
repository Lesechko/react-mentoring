import {ReactElement, useEffect, useState} from 'react';
import {SortingType} from '../../../utils/sortingUtils';
import styles from './Sorting.module.css';

export interface ISortingItem {
	id: number;
	value: string;
}

interface ISorting {
	sortingItem: ISortingItem[];
	onItemTriggered?: (id: number, sortType: SortingType) => void;
}

const Sorting = ({
	sortingItem = [],
	onItemTriggered,
}: ISorting): ReactElement => {
	const [popupVisible, setPopupVisible] = useState(false);
	const [activeElement, setActiveElement] = useState<ISortingItem>(
		sortingItem[0]
	);
	const [sortingType, setSortingType] = useState(SortingType.UP);
	const popupClassName = `${styles.popup} ${
		popupVisible ? styles.visible : ''
	}`;

	const sortingTypeBtnClassName = `${styles.toggleBtn} ${
		sortingType === SortingType.UP ? styles['arrow-up'] : styles['arrow-down']
	}`;

	const onSortingValueChange = (id: number) => {
		const activeValue = sortingItem.find((item) => item.id === id);
		setActiveElement(activeValue);
		onItemTriggered?.(id, sortingType);
		setPopupVisible(false);
	};

	const sortingToggle = () => setPopupVisible((visible) => !visible);

	const onSortTypeChange = () => {
		setSortingType((sortingType) =>
		sortingType === SortingType.UP ? SortingType.DOWN : SortingType.UP
		);
		onItemTriggered?.(activeElement.id, sortingType);
	};

	return (
		sortingItem.length && (
			<div className={styles.sorting}>
				<span className={styles.title}>sort by</span>
				<span>
					<span className={styles.activeElement} onClick={sortingToggle}>
						{activeElement.value}
					</span>
					<span className={popupClassName}>
						{sortingItem.map((item) => (
							<span
								className={styles.item}
								key={item.id}
								onClick={() => onSortingValueChange(item.id)}
							>
								{item.value}
							</span>
						))}
					</span>
				</span>
				<span className={sortingTypeBtnClassName} onClick={onSortTypeChange}></span>
			</div>
		)
	);
};

export default Sorting;
