import Sorting from './Sorting'
import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import { withRouter } from '../../../../__mocks__'
import { sortingItem } from '../../../../__mocks__'

const ON_ITEM_TRIGGERED = jest.fn()
const SORTING_ITEM: any[] = []
let component: RenderResult

beforeEach(() => {
  const Component = withRouter(
    <Sorting onItemTriggered={ON_ITEM_TRIGGERED} sortingItem={SORTING_ITEM} />,
  )
  component = render(Component)
})

test('Should not render if open is false', async () => {
  const modalEl = component.queryByTestId('sorting')

  expect(modalEl).toBeFalsy()
  SORTING_ITEM.push(...sortingItem)
  
})

test('Should render if open is true', () => {
  const modalEl = component.queryByTestId('sorting')

  expect(modalEl).toBeTruthy()
})


test('Should render title', () => {
  const title = SORTING_ITEM[0].title
  const titleEl = component.getByTestId('title')

  expect(titleEl).toHaveTextContent(title)
})

test('Should call onItemTriggered  method', () => {
  const sortEl = component.getByTestId('sort')
  fireEvent.click(sortEl)
  expect(ON_ITEM_TRIGGERED).toBeCalled()
})

test('Should has corect label', () => {
  const titleEl = component.getByTestId('sort_by')

  expect(titleEl).toHaveTextContent('sort by')
})

