import { Button, BUTTON_STYLE } from '../button'
import { ReactElement, useState } from 'react'

import styles from './Select.css'
import { ErrorMessage, useField } from 'formik'

interface ISelect {
  title?: string
  name?: string
  data: ISelectData[]
}

export interface ISelectData {
  title?: string
  id: string
}

const Select = ({ title = '', name = '', data }: ISelect): ReactElement => {
  const [field, meta] = useField(name)

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.title}>
        {title.toUpperCase()}
      </label>

      <select className={styles.select} name={name} {...field}>
        <option value="" label={`Select a ${title}`} />
        {data.map(({ title, id }) => (
          <option id={id} key={id} label={title} value={title} />
        ))}
      </select>
      <ErrorMessage name={name} />
    </div>
  )
}

export default Select
