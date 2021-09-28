import { ReactNode } from 'react'
import { EmotionContainerProps, EmotionFlexProps, flex } from '@/presentation/theme/emotion/atoms/containers'
import { Container } from '@/presentation/theme/react/atoms/containers'

interface FlexProps extends EmotionFlexProps, EmotionContainerProps {
  children: ReactNode
}

export const Flex = ({ align, justify, direction, children, ...rest }: FlexProps) => {
  const css = flex({ align, justify, direction })
  return (
    <Container _css={css} {...rest}>
      {children}
    </Container>
  )
}
