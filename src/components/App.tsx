import { ReactElement, useEffect } from 'react'
import styles from './App.module.css'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import { useFetch } from '../hooks'
import { connect } from 'react-redux'
import { setMovies } from '../redux/action-creators/actionCreators'

function App(props: { setMovies: (payload: any) => void }): ReactElement {
  const [{ response }, doFetch] = useFetch('/movies')

  useEffect(() => {
    doFetch()
  }, [])

  useEffect(() => {
    if (!response) {
      return
    }

    props.setMovies(response.data)
  }, [response])

  return (
    <ErrorBoundary>
      <div className={styles.app}>
        <Header />
        <div className={styles.separator} />
        <Main />
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

function setDispatchToProps(dispatch: any) {
  return {
    setMovies: (payload: any) => dispatch(setMovies(payload)),
  }
}

export default connect(null, setDispatchToProps)(App)
