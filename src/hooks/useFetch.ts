import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

type IUseFetch = [{ isLoading: boolean; response: any; error: any }, () => void]

const useFetch = (url: string, conf?: Record<string, any>): IUseFetch => {
  const baseUrl = 'http://localhost:4000'
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})

  useEffect(() => {
    const requestOptions = {
      ...options,
    }

    if (!isLoading) {
      return
    }

    axios(`${baseUrl}${url}`, requestOptions)
      .then((res) => {
        console.log(res)
        setResponse(res.data)
      })
      .catch((err) => {
        setError(err.response.data.message)
      })
      .finally(() => setIsLoading(false))
  }, [isLoading])

  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }, [])

  return [{ isLoading, response, error }, doFetch]
}
export default useFetch
