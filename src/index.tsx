import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import reducers from './redux/reducers'
import { Provider } from 'react-redux'
import './index.css'

const store = createStore(reducers)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.querySelector('#app'))
