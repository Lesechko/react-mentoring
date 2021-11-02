import styles from './Button.module.css'
import { ReactElement, ReactNode } from 'react'
import { BUTTON_TYPE, BUTTON_STYLE } from './buttonTypes'

interface IButton {
  style: BUTTON_STYLE
  children: ReactNode
  type?: BUTTON_TYPE
  onClick?: () => void
}

const Button = ({
  type = BUTTON_TYPE.DEFAULT,
  onClick,
  children,
  style = BUTTON_STYLE.COMPLETE,
}: IButton): ReactElement => {
  const className = `${styles.btn} ${styles[`btn-${style}`]}`
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
