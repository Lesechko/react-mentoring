import { Button, BUTTON_TYPE, BUTTON_STYLE } from '../button'
import { Input } from '../input'
import { Formik, Form } from 'formik'
import { Select } from '../select'
import { IMovie } from '../../movieList/movie/Movie'
import {
  getGenresTemplate,
  getInitialMovieForm,
  getValidation,
} from './Modal.utils'

import styles from './Modal.css'
import { useEffect } from 'react'
export interface IMovieForm {
  title: string
  poster_path: string
  genre: string
  release_date: string
  vote_average: number
  runtime: number
  overview: string
  id?: number
}
interface IModal {
  open: boolean
  initialData?: IMovie | {}
  onClose: () => void
  onSubmit: (movie: IMovieForm) => void
}
const Modal = ({ open, initialData = null, onClose, onSubmit }: IModal) => {
  const initialForm = getInitialMovieForm(initialData)
  const validatation = getValidation()
  const genres = getGenresTemplate()

  const submitForm = (
    values: IMovieForm,
    { resetForm }: { resetForm: () => void },
  ) => {
    onSubmit(values)
    resetForm()
  }

  useEffect(() => {
    open && window.scrollTo(0, 0)
  }, [open])

  return (
    open && (
      <Formik
        initialValues={initialForm}
        validationSchema={validatation}
        onSubmit={submitForm}
        data-testid = 'formik'
      >
        {({ resetForm }) => (
          <div className={styles.container}  data-testid = 'form'>
            <Form>
              <div className={styles.modal}>
                <div className={styles.close} onClick={onClose} data-testid = 'close'>
                  X
                </div>
                <div className={styles.title}>ADD MOVIE</div>
                <div className={styles.wrapper}>
                  <div className={styles.left}>
                    <Input title="title" type="text" name="title" />
                    <Input title="movie url" type="text" name="poster_path" />
                    <Select title="genre" name="genre" data={genres} />
                  </div>
                  <div className={styles.right}>
                    <Input
                      title="release date"
                      type="date"
                      name="release_date"
                    />
                    <Input title="rating" type="text" name="vote_average" />
                    <Input title="runtime" type="text" name="runtime" />
                  </div>
                  <div className={styles.overview}>
                    <Input title="overview" type="textarea" name="overview" />
                  </div>
                </div>
                <div className={styles.buttons}>
                  <Button
                    onClick={resetForm}
                    style={BUTTON_STYLE.TRANSPARENT}
                    type={BUTTON_TYPE.RESET}
                  >
                    RESET
                  </Button>
                  <Button
                    style={BUTTON_STYLE.COMPLETE}
                    type={BUTTON_TYPE.SUBMIT}
                  >
                    SUBMIT
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    )
  )
}

export default Modal
