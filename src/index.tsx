import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './components/App'
import reducers from './redux/reducers'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

import './index.css'
import { PageNotFound } from './components/common'

const store = createStore(reducers)

const app = (
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route path="/search/*" element={<App />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>
)

ReactDOM.render(app, document.querySelector('#app'))
