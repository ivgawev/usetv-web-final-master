import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { container, EmotionContainerProps } from '@/presentation/theme/emotion/atoms/containers'

interface ContainerProps<T = 'div'> extends EmotionContainerProps {
  as?: T
  className: string
  children?: ReactNode
}

const EmotionContainer = styled.div<Pick<ContainerProps, 'as' | '_css'>>``
export const Container = ({ as, className, children, ...rest }: ContainerProps) => {
  const css = container(rest)
  const classNames = className ? css + ' ' + className : css

  return (
    <EmotionContainer as={as} className={classNames}>
      {children}
    </EmotionContainer>
  )
}

Container.defaultProps = {
  as: 'div'
} as ContainerProps
