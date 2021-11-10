import IRoute from '../interfaces/route'
import Header from '../components/header/Header'
import { MovieInfo } from '../components/movieInfo/MovieInfo'

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home page',
    component: Header,
    exact: true,
  },
  {
    path: '/search',
    name: 'Search page',
    component: Header,
    exact: true,
  },
  {
    path: '/movie/:id',
    name: 'Movie info page',
    component: MovieInfo,
    exact: true,
  },
]

export default routes
