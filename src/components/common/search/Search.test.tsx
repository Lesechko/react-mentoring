import Search from './Search'
import { createMemoryHistory } from 'history'
import { fireEvent, render, screen } from '@testing-library/react'
import { withRouter } from '../../../../__mocks__'

const PLACEHOLDER = 'placeholder'
const ACTION_NAME = 'placeholder'
const VALUE = 'initial value'
let getByTestId: (name: string) => HTMLElement

beforeEach(() => {
  const Component = withRouter(
    <Search placeholder={PLACEHOLDER} actionName={ACTION_NAME} value={VALUE} />,
  )
  const component = render(Component)
  getByTestId = component.getByTestId
})

test('Should set value prop as input element valus', () => {
  const inputEl = getByTestId('input') as HTMLInputElement

  expect(inputEl.value).toBe(VALUE)
})

test('Should set placeholder prop as input element placeholder', () => {
  const inputEl = getByTestId('input') as HTMLInputElement

  expect(inputEl.placeholder).toBe(PLACEHOLDER)
})

test('Change value of input correctly', () => {
  const newValue = 'newMovie'
  const inputEl = getByTestId('input') as HTMLInputElement

  fireEvent.change(inputEl, { target: { value: newValue } })

  expect(inputEl.value).toEqual(newValue)
})

test('Search component match snapshot', () => {
  const Component = withRouter(
    <Search placeholder={PLACEHOLDER} actionName={ACTION_NAME} value={VALUE} />,
  )
  const { asFragment } = render(Component)

  expect(asFragment()).toMatchSnapshot()
})

test('Search component match snapshot', () => {
  const fn = jest.fn()
  const history = createMemoryHistory()
  const btn = screen.getByText(ACTION_NAME)
  fireEvent.click(btn, { target: { value: 'GGG' } })
  fn()
  expect(fn).toBeCalled()
})
