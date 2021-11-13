import { ReactElement } from 'react'
import { Button, BUTTON_STYLE } from '../common/button'
import { Logo } from '../common/logo'
import { Search } from '../common/search'
import { connect } from 'react-redux'
import { setActiveMovie } from '../../redux/action-creators/actionCreators'
import { RootState } from '../../redux/reducers'

import styles from './Header.module.css'
import { useSearchParams } from 'react-router-dom'

interface IHeader {
  addMovie: () => void
}

const Header = ({ addMovie }: IHeader): ReactElement => {
  const [params] = useSearchParams()
  const searchValue = params.get('search') || ''

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Logo />
          <Button style={BUTTON_STYLE.TRANSPARENT} onClick={addMovie}>
            + Add movie
          </Button>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Find your movie</div>
          <Search
            value={searchValue}
            placeholder="What do you want to watch ?"
            actionName="Search"
          />
        </div>
      </div>
    </header>
  )
}

function mapStateToProps(state: RootState) {
  return {
    activeMovie: state.movies.activeMovie,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    setActiveMovie: (id: number | null) => dispatch(setActiveMovie(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
