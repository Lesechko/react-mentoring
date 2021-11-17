import Modal from './Modal'
import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import { withRouter } from '../../../../__mocks__'

const ON_CLOSE = jest.fn()
const ON_SUBMIT = jest.fn()
global.scrollTo = jest.fn()
let open = false
let component: RenderResult

beforeEach(() => {
  const Component = (
    <Modal onClose={ON_CLOSE} onSubmit={ON_SUBMIT} open={open} />
  )
  component = render(Component)
})

test('Should not render if open is false',async () => {
   const modalEl =  component.queryByTestId('form')

  expect(modalEl).toBeFalsy()
  open = true
})

test('Should render if open is true',  () => {
  const modalEl =  component.queryByTestId('form')

  expect(modalEl).toBeTruthy()
})

test('Should call onClose after click',  () => {
  const closeEl =  component.getByTestId('close')
  fireEvent.click(closeEl)
  expect(ON_CLOSE).toBeCalled()
})

