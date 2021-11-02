import styles from './Input.css'
import { useField, ErrorMessage } from 'formik'
interface IInput {
  type: string
  title: string
  name: string
}

const Input = ({ title, type, name }: IInput) => {
  const [field, meta] = useField(name)

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.title}>
        {title.toUpperCase()}
      </label>

      {type !== 'textarea' ? (
        <input
          name={name}
          type={type}
          className={styles.input}
          autoComplete="off"
          {...field}
        ></input>
      ) : (
        <textarea
          name={name}
          className={`${styles.input} ${styles.textarea}`}
          {...field}
        ></textarea>
      )}
      <ErrorMessage name={name} />
    </div>
  )
}

export default Input
