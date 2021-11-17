import { renderHook, act } from '@testing-library/react-hooks'
import useFetch from './useFetch'

test('isLoading should be false after init', () => {
  const { result } = renderHook(() => useFetch(''))

  expect(result.current[0].isLoading).toBeFalsy()
})

test('response should be null after init', () => {
  const { result } = renderHook(() => useFetch(''))

  expect(result.current[0].response).toBeNull()
})

test('isLoading should be true after fetch', () => {
  const { result } = renderHook(() => useFetch(''))

  act(() => {
    result.current[1]()
  })

  expect(result.current[0].isLoading).toBeTruthy()
})