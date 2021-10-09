import styles from './Input.css'

interface IInput {
  type: string
  title: string
}

const Input = ({ title, type }: IInput) => {
  return (
    <div className={styles.title}>
      <label htmlFor="input" className={styles.title}>
        {title.toUpperCase()}
      </label>

      {type !== 'textarea' ? (
        <input name="input" type={type} className={styles.input}></input>
      ) : (
        <textarea name="input" className={`${styles.input} ${styles.textarea}`}></textarea>
      )}
    </div>
  )
}

export default Input
