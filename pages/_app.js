import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'
import { ThemeProvider } from 'emotion-theming'
import App from 'next/app'
import React, { Fragment } from 'react'

import { GlobalStyles } from 'components/GlobalStyles'
import { common, light } from 'themes'

const cache = createCache()

class MyApp extends App {
  constructor () {
    super()

    this.state = {
      theme: 'light'
    }
  }

  componentDidMount () {
    if (typeof window !== 'undefined') {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

      this.setState({ theme: isDarkMode ? 'dark' : 'light' })
    }
  }

  render () {
    const { Component, pageProps } = this.props

    const { theme } = this.state

    return (
      <CacheProvider value={cache}>
        <ThemeProvider
          theme={{
            ...common,
            ...theme === 'dark' ? light : light
          }}
        >
          <Fragment>
            <GlobalStyles />
            <Component {...pageProps} />
          </Fragment>
        </ThemeProvider>
      </CacheProvider>
    )
  }
}

export default MyApp
