import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'
import GhostContentAPI from '@tryghost/content-api'
import { ThemeProvider } from 'emotion-theming'
import App from 'next/app'
import React from 'react'

import { GlobalStyles } from 'components/GlobalStyles'
import { Inter } from 'components/Inter'
import { Layout } from 'components/Layout'
import { Normalize } from 'components/Normalize'
import { common, light } from 'themes'

const cache = createCache()

class MyApp extends App {
  constructor () {
    super()

    this.state = {
      theme: 'light'
    }
  }

  // @TODO: Disable until theme is added
  // componentDidMount () {
  //   if (typeof window !== 'undefined') {
  //     const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  //     this.setState({ theme: isDarkMode ? 'dark' : 'light' })
  //   }
  // }

  render () {
    const { Component, description, pageProps, router, title } = this.props

    const { theme } = this.state

    return (
      <CacheProvider value={cache}>
        <ThemeProvider
          theme={{
            ...common,
            ...theme === 'dark' ? light : light
          }}
        >
          <Layout title={title}>
            <Normalize />
            <GlobalStyles />
            <Inter />
            <Component
              {...pageProps}
              description={description}
              key={router.route}
              title={title}
            />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    )
  }
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  const api = new GhostContentAPI({
    url: process.env.GHOST_API_URL,
    key: process.env.GHOST_CONTENT_API_KEY,
    version: 'v3'
  })

  const { description, title } = await api
    .settings
    .browse({
      limit: 'all'
    })

  return {
    ...appProps,
    description,
    title
  }
}

export default MyApp
