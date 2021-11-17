import Button from './Button'
import {BUTTON_STYLE } from './buttonTypes'
import { fireEvent, render } from '@testing-library/react'

const STYLE = BUTTON_STYLE.COMPLETE
const NAME = 'Button'
const ON_CLICK = jest.fn()

let buttonEl: HTMLElement

beforeEach(() => {
  const { getByTestId } = render(
    <Button style={STYLE} onClick={ON_CLICK}>
      {NAME}
    </Button>,
  )
  buttonEl = getByTestId('button')
})

test('Button name is corect', () => {
  expect(buttonEl).toHaveTextContent(NAME)
})

test('Button style is corect', () => {
  expect(buttonEl.classList).toContain(`btn-${STYLE}`)
})

test('Сalls the passed method on click', () => {
  fireEvent.click(buttonEl)
  expect(ON_CLICK).toBeCalled()
})
