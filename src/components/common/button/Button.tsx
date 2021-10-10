import styles from './Button.module.css'
import { ReactElement, ReactNode } from 'react'
import { BUTTON_TYPES } from './buttonTypes'

interface IButton {
  type: BUTTON_TYPES
  children: ReactNode
  onClick: () => void
}

const Button = (props: IButton): ReactElement => {
  const className = `${styles.btn} ${styles[`btn-${props.type}`]}`
  return (
    <span className={className} onClick={props.onClick}>
      {props.children}
    </span>
  )
}

export default Button
