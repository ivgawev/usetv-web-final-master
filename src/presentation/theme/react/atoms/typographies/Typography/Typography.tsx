import { EmotionTypographyProps, typography } from '@/presentation/theme/emotion/atoms/typographies'
import { EmotionContainerProps } from '@/presentation/theme/emotion/atoms/containers'
import { ReactNode } from 'react'
import { Container } from '@/presentation/theme/react/atoms/containers'

interface TypographyProps extends EmotionTypographyProps, EmotionContainerProps {
  children?: ReactNode
}

export const Typography = ({ family, size, weight, align, children, ...rest }: TypographyProps) => {
  const css = typography({ family, size, weight, align })
  return (
    <Container as="p" _css={css} {...rest}>
      {children}
    </Container>
  )
}
