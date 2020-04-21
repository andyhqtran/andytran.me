import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'
import { ThemeProvider } from 'emotion-theming'
import App from 'next/app'
import React, { Fragment } from 'react'

import { GlobalStyle } from 'components/GlobalStyle'
import { common } from 'themes'

const cache = createCache()

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <CacheProvider value={cache}>
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
      </CacheProvider>
    )
  }
}

export default MyApp
