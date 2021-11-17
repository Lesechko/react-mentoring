import PageNotFound from './PageNotFound'
import { render, screen } from '@testing-library/react'
import { withRouter } from '../../../../__mocks__'
const ERROR_MESSAGE = '404, page not found....'

test('PageNotFound renders with correct message', () => {
  const ComponentWithRouter = withRouter(<PageNotFound />)
  const { getByTestId } = render(ComponentWithRouter)
  const message = getByTestId('message')

  expect(message.textContent).toEqual(ERROR_MESSAGE)
})
