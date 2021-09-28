import { css } from '@emotion/css'
import { Spacing } from '@/presentation/theme/foundation'
import { Position, ImagePosition, ImageSize, getDisplay, getSpacing } from '@/presentation/theme/emotion/atoms/containers'

export interface EmotionContainerProps {
  position?: Position
  flex?: boolean
  block?: boolean
  cords?: Spacing
  height?: string
  width?: string
  margin?: Spacing
  padding?: Spacing
  textColor?: string
  backgroundColor?: string
  opacity?: number
  image?: string
  imagePosition?: ImagePosition
  imageSize?: ImageSize
  zIndex?: number
  _css?: string
}

export const container = ({ position, flex, block, cords, height, width, margin, padding, textColor, backgroundColor, image, imageSize, imagePosition, zIndex, _css }: EmotionContainerProps) => css`
  position: ${position};
  display: ${getDisplay({ flex, block })};
  top: ${cords?.top && cords.top + '%'};
  right: ${cords?.right && cords.right + '%'};
  bottom: ${cords?.bottom && cords.bottom + '%'};
  left: ${cords?.left && cords.left + '%'};

  height: ${height};
  width: ${width};

  margin: ${margin && getSpacing({ space: margin })};
  padding: ${padding && getSpacing({ space: padding })};

  color: ${textColor && textColor};
  background-color: ${backgroundColor && backgroundColor};
  background-image: ${image && `url(${image})`};
  background-size: ${imageSize};
  background-position: ${imagePosition};

  z-index: ${zIndex};

  ${_css}
`
