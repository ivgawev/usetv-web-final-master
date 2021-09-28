import { css, SerializedStyles } from '@emotion/react'

const getFont = (font: string): SerializedStyles => {
  return css`
    @import url('https://fonts.googleapis.com/css2?family=${font}:wght@300;400;500;600;700&display=swap');
  `
}

interface GetFontsParams {
  fonts?: string | string[]
  defaultFont?: string
}

export const getFontsCss = ({ fonts, defaultFont }: GetFontsParams): SerializedStyles | SerializedStyles[] | undefined => {
  if (!fonts) return

  const googleFonts: SerializedStyles[] = []
  if (Array.isArray(fonts)) {
    for (const font of fonts) {
      googleFonts.push(getFont(font))
    }
  } else {
    googleFonts.push(getFont(fonts))
  }

  googleFonts.push(
    css`
      * {
        font-family: ${defaultFont || 'initial'};
      }
    `
  )
  return googleFonts
}
