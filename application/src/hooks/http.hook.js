/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      const responce = await fetch(url, {
        method, body, headers
      })
      const data = await responce.json()

      if (!responce.ok) {
        throw new Error(data.message || 'Something not normal')
      }

      setLoading(false)
      return data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  const clearError = () => setError(null)

  return { loading, request, error }
}
