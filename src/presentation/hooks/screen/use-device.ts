import { useDisplay } from '@/presentation/hooks/screen'
import { useEffect, useState } from 'react'

export enum Device {
  SMARTPHONE = 'smartphone',
  TABLET = 'tablet',
  LAPTOP = 'laptop',
  DESKTOP = 'desktop'
}

export const useDevice = () => {
  const [device, setDevice] = useState<Device>(Device.DESKTOP)
  const { windowSize } = useDisplay()

  useEffect(() => {
    const { width } = windowSize

    if (width <= 480) setDevice(Device.SMARTPHONE)
    else if (width >= 481 && width <= 1024) setDevice(Device.TABLET)
    else if (width >= 1025 && width <= 1280) setDevice(Device.LAPTOP)
    else if (width > 1280) setDevice(Device.DESKTOP)
  }, [windowSize])

  return { device }
}
