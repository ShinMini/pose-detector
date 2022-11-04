import { useState, useEffect, useCallback } from 'react'
import { LayersModel } from '@tensorflow/tfjs'

// Hook
const useModelAsync = <T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle')
  const [model, setModel] = useState<T | undefined>(undefined)
  const [error, setError] = useState<E | null>(null)

  const execute = useCallback(async () => {
    setStatus('pending')
    setModel(undefined)
    setError(null)
    try {
      const model = asyncFunction()
      setModel(await model)
      setStatus('success')
    } catch (error: any) {
      setError(error)
      setStatus('error')
    }
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, model, error }
}
export default useModelAsync
