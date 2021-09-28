import { Spacing } from '@/presentation/theme/foundation'

interface GetDisplayParams {
  flex?: boolean
  block?: boolean
}

export const getDisplay = ({ flex, block }: GetDisplayParams): string => {
  if (flex) {
    if (block) return 'flex'
    return 'inline-flex'
  }

  if (block) return 'block'
  return 'inline-block'
}

interface GetSpacingParams {
  space: Spacing
}

export const getSpacing = ({ space }: GetSpacingParams): string => {
  const { top, right, bottom, left, full, x, y } = space
  return `${top || y || full || 0}px ${right || x || full || 0}px ${bottom || y || full || 0}px ${left || x || full || 0}px`
}
