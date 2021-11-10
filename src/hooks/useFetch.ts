import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

type IUseFetch = [
  { isLoading: boolean; response: any; error: any },
  (options?: Record<string, any>, query?: string) => void,
]
const BASE_URL = 'http://localhost:4000/'

const useFetch = (url: string): IUseFetch => {
  const initialOptions = { url: `${BASE_URL}${url}` }
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState(initialOptions)

  useEffect(() => {
    setOptions((options) => ({ ...options }))

    isLoading &&
      axios(options)
        .then((res) => {
          setResponse(res.data)
        })
        .catch((err) => {
          setError(err.response.data.message)
        })
        .finally(() => {
          setIsLoading(false)
          setOptions(initialOptions)
        })
  }, [isLoading])

  const doFetch = useCallback((addedOptions = {}, query = null) => {
    console.log(query)

    query && (addedOptions.url = `${options.url}/${query}`)
    setOptions((prevOptions) => ({ ...prevOptions, ...addedOptions }))
    setIsLoading(true)
  }, [])

  return [{ isLoading, response, error }, doFetch]
}
export default useFetch
