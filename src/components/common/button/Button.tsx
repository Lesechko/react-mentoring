import styles from './Button.module.css'
import { ReactElement, ReactNode } from 'react'
import { BUTTON_TYPES } from './buttonTypes'

interface IButton {
  type: BUTTON_TYPES
  children: ReactNode
  onClick: () => void
}

const Button = ({type, onClick, children}: IButton): ReactElement => {
  const className = `${styles.btn} ${styles[`btn-${type}`]}`
  return (
    <span className={className} onClick={onClick}>
      {children}
    </span>
  )
}

export default Button
