import styles from './Input.css'

interface IInput {
  type: string
  title: string
  name : string
}

const Input = ({ title, type, name }: IInput) => {
  return (
    <div className={styles.title}>
      <label htmlFor={name} className={styles.title}>
        {title.toUpperCase()}
      </label>

      {type !== 'textarea' ? (
        <input name={name} type={type} className={styles.input} ></input>
      ) : (
        <textarea name={name} className={`${styles.input} ${styles.textarea}`}></textarea>
      )}
    </div>
  )
}

export default Input
