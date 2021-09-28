import { AlignItems, FlexDirection, JustifyContent } from '@/presentation/theme/emotion/atoms/containers'
import { css } from '@emotion/css'

export interface EmotionFlexProps {
  align?: AlignItems
  justify?: JustifyContent
  direction?: FlexDirection
}

export const flex = ({ align, justify, direction }: EmotionFlexProps) => css`
  align-items: ${align};
  justify-content: ${justify};
  flex-direction: ${direction};
`
