import { Button, BUTTON_TYPES } from '..'
import { Input } from '../input'
import styles from './Modal.css'

interface IModal {
  open: boolean
  onClose: () => void
}

const Modal = ({ open, onClose }: IModal) => {
  const className = `${styles.container} ${open ? styles.open : ''}`

  return (
    <div className={className}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={onClose}>
          X
        </div>
        <div className={styles.title}>ADD MOVIE</div>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Input title="title" type="text" />
            <Input title="movie url" type="text" />
            <Input title="genre" type="text" />
          </div>
          <div className={styles.right}>
            <Input title="release date" type="date" />
            <Input title="rating" type="text" />
            <Input title="runtime" type="text" />
          </div>
          <div className={styles.overview}>
            <Input title="release date" type="textarea" />
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            onClick={() => console.log('RESET')}
            type={BUTTON_TYPES.TRANSPARENT}
          >
            RESET
          </Button>
          <Button
            onClick={() => console.log('RESET')}
            type={BUTTON_TYPES.COMPLETE}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
