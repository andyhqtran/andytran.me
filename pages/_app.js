import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'
import { ThemeProvider } from 'emotion-theming'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'

import { GlobalStyles } from 'components/GlobalStyles'
import { Inter } from 'components/Inter'
import { Layout } from 'components/Layout'
import { Normalize } from 'components/Normalize'
import { common, light } from 'themes'

const cache = createCache()

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <CacheProvider value={cache}>
      <ThemeProvider
        theme={{
          ...common,
          ...light
        }}
      >
        <Normalize />
        <GlobalStyles />
        <Inter />
        <Layout postTitle={pageProps.post && pageProps.post.title} title={pageProps.title}>
          <Component
            {...pageProps}
            key={router.route}
          />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default MyApp
