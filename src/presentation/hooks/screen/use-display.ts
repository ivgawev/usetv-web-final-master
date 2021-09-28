import { useEffect, useState } from 'react'

interface WindowSize {
  height: number
  width: number
}

export const useDisplay = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 0, height: 0 })
  const handleResize = () => setWindowSize({ height: window.innerHeight, width: window.innerWidth })

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { windowSize }
}
