import App from 'next/app'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'components/GlobalStyle'

const theme = {
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  fontSizes: [18, 24, 32, 70],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
}

theme.fontSizes.body = theme.fontSizes[0]
theme.fontSizes.h1 = theme.fontSizes[3]
theme.fontSizes.h2 = theme.fontSizes[3] // @TODO: Figure out font size for h2
theme.fontSizes.h3 = theme.fontSizes[2]
theme.fontSizes.h4 = theme.fontSizes[1]

theme.fontWeights.thin = theme.fontWeights[0]
theme.fontWeights.extraLight = theme.fontWeights[1]
theme.fontWeights.light = theme.fontWeights[2]
theme.fontWeights.regular = theme.fontWeights[3]
theme.fontWeights.medium = theme.fontWeights[4]
theme.fontWeights.semiBold = theme.fontWeights[5]
theme.fontWeights.bold = theme.fontWeights[6]
theme.fontWeights.extraBold = theme.fontWeights[7]
theme.fontWeights.black = theme.fontWeights[8]

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Component {...pageProps} />
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default MyApp
