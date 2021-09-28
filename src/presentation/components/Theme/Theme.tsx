import { ThemeConfig } from '@/presentation/theme/interfaces'
import { ReactNode } from 'react'
import { getFontsCss } from '@/presentation/components/Theme'
import { Container } from '@/presentation/theme/react/atoms/containers'

import '@/presentation/theme/assets/reset.css'
import { Global } from '@emotion/react'

interface ThemeProps {
  theme?: ThemeConfig
  children: ReactNode
}

export const Theme = ({ theme, children }: ThemeProps) => {
  const fonts = theme?.typography.fontFamilies
  const defaultFont = theme?.typography.defaultFontFamily
  const googleFonts = getFontsCss({ fonts, defaultFont })

  return (
    <>
      <Global styles={googleFonts} />
      <Container block height="100vh">
        {children}
      </Container>
    </>
  )
}
