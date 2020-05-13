import { Global } from '@emotion/core'
import { css } from '@styled-system/css'
import React from 'react'

const GlobalStyles = () => {
  return (
    <Global
      styles={css({
        body: {
          backgroundColor: 'shade.inverse',
          color: 'shade.6',
          fontFamily: 'body',
          fontWeight: 'regular',
          lineHeight: 'body',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }
      })}
    />
  )
}

export default GlobalStyles
