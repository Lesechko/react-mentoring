import { createContext, ReactElement, useContext, useReducer } from 'react'
import { initialState } from '../state/state'
import { reducer } from '../state/reducer'

export const MovieContext = createContext(null)

export const MovieProvider = ({ children }: { children: ReactElement }) => {
  const value = useReducer(reducer, initialState)

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  )
}
