import { TypographyAlign, TypographyType, TypographyWeight } from '@/presentation/theme/emotion/atoms/typographies'
import { css } from '@emotion/css'

export interface EmotionTypographyProps {
  family?: TypographyType
  size?: number
  weight?: TypographyWeight
  align?: TypographyAlign
}

export const typography = ({ family, size, weight, align }: EmotionTypographyProps) => css`
  font-family: ${family};
  font-size: ${size};
  font-weight: ${weight};
  text-align: ${align};
`
