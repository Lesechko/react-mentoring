import { useRef } from 'react'
import { Button, BUTTON_TYPES } from '..'
import { IMovie } from '../../movieList/movie/Movie'
import { Input } from '../input'
import { getMovieId } from '../../../utils/idUtils'
import styles from './Modal.css'

interface IModal {
  open: boolean
  onClose: () => void
  onSubmit: (movie: IMovie) => void
}

const Modal = ({ open, onClose, onSubmit }: IModal) => {
  const className = `${styles.container} ${open ? styles.open : ''}`
  const form = useRef<any>()

  const onFormSubmit = () => {
    if (!form.current) {
      return
    }
    const formValues = form.current
    const movie: IMovie = {
      id: getMovieId(),
      name: formValues[0].value,
      img: formValues[1].value,
      genre: formValues[2].value,
      release: formValues[3].value,
      rating: formValues[4].value,
      runtime: formValues[5].value,
      overview: formValues[6].value,
    }

    onSubmit(movie)
  }

  const onClear = () => {
    console.log(form)
  }

  return (
    <form className={className} ref={form}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={onClose}>
          X
        </div>
        <div className={styles.title}>ADD MOVIE</div>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Input title="title" type="text" name="title" />
            <Input title="movie url" type="text" name="url" />
            <Input title="genre" type="text" name="genre" />
          </div>
          <div className={styles.right}>
            <Input title="release date" type="date" name="release" />
            <Input title="rating" type="text" name="rating" />
            <Input title="runtime" type="text" name="runtime" />
          </div>
          <div className={styles.overview}>
            <Input title="overview" type="textarea" name="overview" />
          </div>
        </div>
        <div className={styles.buttons}>
          <Button onClick={onClear} type={BUTTON_TYPES.TRANSPARENT}>
            RESET
          </Button>
          <Button onClick={onFormSubmit} type={BUTTON_TYPES.COMPLETE}>
            SUBMIT
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Modal
