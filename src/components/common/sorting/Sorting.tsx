import { ReactElement, useEffect, useState } from 'react'
import { useMovieQueryParams } from '../../../hooks'
import { MovieParam } from '../../../hooks/useMovieQueryParams'
import { ISortingItem, SortingType } from './Sorting.constants'

import styles from './Sorting.module.css'
interface ISorting {
  sortingItem: ISortingItem[]
  onItemTriggered?: (sortBy: string, sortType: SortingType) => void
}

const Sorting = ({
  sortingItem = [],
  onItemTriggered,
}: ISorting): ReactElement => {
  const [popupVisible, setPopupVisible] = useState(false)
  const [activeElement, setActiveElement] = useState<ISortingItem>(
    () => sortingItem[0],
  )
  const [sortingType, setSortingType] = useState(SortingType.UP)
  const [, queryService] = useMovieQueryParams()
  const sortByParam = queryService.getParam(MovieParam.SortBy)
  const popupClassName = `${styles.popup} ${popupVisible ? styles.visible : ''}`

  const sortingTypeBtnClassName = `${styles.toggleBtn} ${
    sortingType === SortingType.UP ? styles['arrow-up'] : styles['arrow-down']
  }`

  const onSortingValueChange = (id: number) => {
    const activeValue = sortingItem.find((item) => item.id === id)
    setActiveElement(activeValue)
    onItemTriggered?.(activeValue.value, sortingType)
    setPopupVisible(false)
  }

  const sortingToggle = () => setPopupVisible((visible) => !visible)

  const onSortTypeChange = () => {
    const newSortType =
      sortingType === SortingType.UP ? SortingType.DOWN : SortingType.UP
    setSortingType(newSortType)
    onItemTriggered?.(activeElement.value, newSortType)
  }

  useEffect(() => {
    if (!sortByParam) {
      return
    }
    const activeElement = sortingItem.find((el) => el.value === sortByParam)
    const sortingType =
    queryService.getParam(MovieParam.SortOrder) === SortingType.UP
        ? SortingType.UP
        : SortingType.DOWN
    setActiveElement(activeElement)
    setSortingType(sortingType)
  }, [sortByParam])

  return (
    sortingItem.length && (
      <div className={styles.sorting} data-testid = 'sorting'>
        <span className={styles.title} data-testid = 'sort_by' >sort by</span>
        <span>
          <span className={styles.activeElement} onClick={sortingToggle} data-testid = 'title'>
            {activeElement.title}
          </span>
          <span className={popupClassName}>
            {sortingItem.map((item) => (
              <span
                className={styles.item}
                key={item.id}
                onClick={() => onSortingValueChange(item.id)}
              >
                {item.title}
              </span>
            ))}
          </span>
        </span>
        <span
          className={sortingTypeBtnClassName}
          onClick={onSortTypeChange}
          data-testid = 'sort'
        ></span>
      </div>
    )
  )
}

export default Sorting
