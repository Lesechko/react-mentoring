import { ContextMenu } from './ContextMenu'
import { fireEvent, render, RenderResult,  } from '@testing-library/react'

const ID = 5
const POSITION = { x: 100, y: 20 }
const DATA = {
  label: 'mock-label',
  onClick: jest.fn(),
}

let opened: boolean = false
let component: RenderResult

beforeEach(() => {
  component = render(
    <ContextMenu
      opened={opened}
      data={[DATA]}
      position={POSITION}
      id={ID}
    ></ContextMenu>,
  )
})

test('Component should not be rendered if the parameter opened is false', () => {
  const contextEl = component.findByTestId('context')

  expect(contextEl).toMatchObject({})
  opened = true
})

test('Number of menu items must match the date passed', () => {
  const ul = component.getByTestId('list')
  expect(ul.childNodes.length).toBe(1)
})

// test('Menu style has corect position', (done) => {
//   const contextEl = component.findByTestId('context')

//   expect(contextEl.style.top).toBe(POSITION.x)
//   expect(el.style.left).toBe(POSITION.y)
// })

test('Сalls the passed method on click', () => {
  const ul = component.getByTestId('list')
  fireEvent.click(ul.firstChild)
  expect(DATA.onClick).toBeCalled()
})
