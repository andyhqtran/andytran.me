import App from 'next/app'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'components/GlobalStyle'
import { common } from 'themes'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider
        theme={{
          ...common
        }}
      >
        <Fragment>
          <GlobalStyle />
          <Component {...pageProps} />
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default MyApp
