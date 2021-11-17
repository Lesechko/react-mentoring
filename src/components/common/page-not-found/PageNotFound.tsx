import { Link } from 'react-router-dom'
import { Button, BUTTON_STYLE } from '../../common'
import styles from './PageNotFound.css'

const PageNotFound = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.txt} data-testid="message">404, page not found....</h1>
    <div className={styles.action}>
      <Button style={BUTTON_STYLE.COMPLETE}>
        <Link className={styles.link} to={'/search'}>
          Go Home
        </Link>
      </Button>
    </div>
  </div>
)

export default PageNotFound
